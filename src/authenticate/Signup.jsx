import React, { useState } from 'react'
import BedImg from '../assets/beds.jpeg'
import NavBar from '../navbar/NavBar'
import './authenticate.css'
import Footer from '../footer/Footer'

function Signup() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')
    

    return (
        <section>
            <NavBar />
            <main className='signup-main-cont m-auto'>
                <article className='authenticate-text-cont'>
                    <h2>Welcome to Furniro</h2>
                    <p>Discover sleek and modern furniture that transforms your living space. Explore our vast collection of sofas, chairs, tables, and more.</p>
                </article>

                <form className="signup-form">

                    <h2>Create an Account to transform your house</h2>
                    
                    <input type="text" placeholder='Enter Username' value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                    <input type="email" placeholder='Enter Email Address' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                    <input type="number" placeholder='Enter Telephone Number' value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}}/>
                    <input type="password" placeholder='Enter Password' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                    <input type="address" placeholder='E.g Country, City, State, Zipcode, ' value={address} onChange={(e) => {setAddress(e.target.value)}}/>
                    <button>Create Account</button>
                    <p className='redirect-to-login'>Already have an account, click here to login</p>
                </form>
            </main>
            <Footer />
        </section>
    )
}

export default Signup
