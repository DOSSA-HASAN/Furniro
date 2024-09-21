import React from 'react'
import Hero from './Hero'
import Section02 from './Section02'
import Partners from './Partners'
import Transformation from './Transformation'
import ExtraLinks from './ExtraLinks'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Section02 />
            <Partners />
            <Transformation />
            <ExtraLinks />
            <Footer />
        </>
    )
}

export default Home
