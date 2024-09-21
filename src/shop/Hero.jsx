import React from 'react'
import './Hero.css'
import NavBar from '../navbar/Navbar'

function Hero() {
    return (
        <section className='bg-linear-shop'>
            <NavBar />
            <main className='shop-hero-main'>
                <h1>Discover Modern Elegance</h1>
                <p>Explore our curated collection of sleek, modern furniture designed to elevate your living space.</p>
                <button>Start Shopping<i class="fa-solid fa-arrow-right"></i></button>
            </main>
            
        </section>
    )
}

export default Hero

