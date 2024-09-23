import React, { useState, useContext } from 'react'
import NavBar from '../navbar/NavBar'
import BedImg from '../assets/beds.jpeg'
import Footer from '../footer/Footer'
import './authenticate.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebaseconfig/FirebaseConfig'
import { productsContext } from '../ProductsContext'
import { doc ,getDoc } from 'firebase/firestore'


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { setUserData, userData } = useContext(productsContext);

    //success and error
    const [successMssg, setSuccessMssg] = useState('');
    const [errorMssg, setErrorMssg] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password)
            setUserData(userCredentials.user)
            console.log(userData)
            setEmail("")
            setPassword("")
            // setSuccessMssg("Successfully logged in as " + userCredentials.user.email)
            setErrorMssg("")

            //fetching users data from db "users"
            const userRef = doc(db, "users", userCredentials.user.uid)
            const userDoc = await getDoc(userRef);
            if(userDoc.exists()){
                setUserData(userDoc.data())
                console.log(userData)
                setSuccessMssg("Successfully logged in as " + userDoc.data().email)
                setErrorMssg("")
            }
            else{
                setErrorMssg("User does not exist")
                setSuccessMssg("")
            }

        } catch (error) {
            setErrorMssg(error.message)
            setSuccessMssg("")
        }
    }

    

    return (
        <section>
            <NavBar />
            <main className='signup-main-cont m-auto'>
                
                <article className='authenticate-text-cont'>
                    <h2>Welcome to Furniro</h2>
                    <p>Discover sleek and modern furniture that transforms your living space. Explore our vast collection of sofas, chairs, tables, and more.</p>
                </article>

                <form className="signup-form" onSubmit={handleLogin}>

                    <h2>Login to begin your transformation</h2>

                    {successMssg && 
                        <div className="success-mssg-cont">
                            <p>{successMssg}</p>
                        </div>
                    }

                    {errorMssg && 
                        <div className="error-mssg-cont">
                            <p>{errorMssg}</p>
                        </div>
                    }
                    
                    <input type="email" placeholder='Enter Email Address' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                    <input type="password" placeholder='Enter Password' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                    <button>Login</button>
                    <p className='redirect-to-login'>Don't have an account, click here to Signup</p>
                </form>
            </main>
            <Footer />
        </section>
    )
}

export default Login
