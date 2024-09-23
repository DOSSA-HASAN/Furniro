import React, { useContext, useState } from 'react'
import BedImg from '../assets/beds.jpeg'
import NavBar from '../navbar/NavBar'
import './authenticate.css'
import Footer from '../footer/Footer'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebaseconfig/FirebaseConfig'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { setDoc, collection, addDoc, doc } from 'firebase/firestore'

function Signup() {

    //success and error
    const [successMssg, setSuccessMssg] = useState('');
    const [errorMssg, setErrorMssg] = useState('');

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')

    const navigateLogin = useNavigate()

    const handleSignup = async (e) => {
        e.preventDefault();
        
        if(username && email && password && phoneNumber && address){
            try{
                const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
    
                console.log(userCredentials)
                setSuccessMssg("Successfully created Account you will be directed to the login page")
                setErrorMssg("")
                try
                {
                    await setDoc(doc(db, "users", userCredentials.user.uid), {
                        name: username,
                        email: email,
                        phoneNumber: phoneNumber,
                        address: address,
                        cart: 0,
                    });
                }
                catch(e){
                    console.log(e.message)
                }
                
        

                setTimeout(() => {
                    navigateLogin('/login')
                }, 3000);

                setUsername("")
                setEmail("")
                setPassword("")
                setPhoneNumber("")
                setAddress("")

            }    
            catch(error){
                if(error.message == "Firebase: Error (auth/email-already-in-use)."){
                    setErrorMssg("Email already in use")
                    setSuccessMssg("")
                    console.log(error.message)
                }
            }
        }
        else{
            setErrorMssg("Kindly fill all the fields")
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

                <form className="signup-form" onSubmit={handleSignup}>

                    <h2>Create an Account to transform your house</h2>

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
                    
                    <input type="text" placeholder='Enter Username' value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                    <input type="email" placeholder='Enter Email Address' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                    <input type="number" placeholder='Enter Telephone Number' value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}}/>
                    <input type="password" placeholder='Enter Password' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                    <input type="address" placeholder='E.g Country, City, State, Zipcode, ' value={address} onChange={(e) => {setAddress(e.target.value)}}/>
                    <button>Create Account</button>
                    <p className='redirect-to-login'><Link to={'/login'} >Already have an account, click here to login</Link></p>
                </form>
            </main>
            <Footer />
        </section>
    )
}

export default Signup
