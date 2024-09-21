import React, { useState } from 'react'
import NavBar from '../navbar/NavBar'
import BedImg from '../assets/beds.jpeg'
import Footer from '../footer/Footer'
import './authenticate.css'


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <section>
            <NavBar />
            <main className='signup-main-cont m-auto'>
                
                <article className='authenticate-text-cont'>
                    <h2>Welcome to Furniro</h2>
                    <p>Discover sleek and modern furniture that transforms your living space. Explore our vast collection of sofas, chairs, tables, and more.</p>
                </article>

                <form className="signup-form">

                    <h2>Login to begin your transformation</h2>
                    
                    <input type="email" placeholder='Enter Email Address' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                    <input type="password" placeholder='Enter Password' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                    <button>Login</button>
                    <p className='redirect-to-login'>Don't have an account, click here to Signip</p>
                </form>
            </main>
            <Footer />
        </section>
    )
}

export default Login
