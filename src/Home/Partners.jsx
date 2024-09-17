import React from 'react'
import Logo1 from '../assets/logo1.png'
import Logo2 from '../assets/logo2.png'
import Logo3 from '../assets/logo3.png'
import Logo4 from '../assets/logo4.png'
import Logo5 from '../assets/logo5.png'
import Carousel1 from '../assets/carousel1.jpeg'
import Carousel2 from '../assets/carousel2.jpeg'
import Carousel3 from '../assets/carousel3.jpeg'
import './partners.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function Partners() {
    return (
        <section className='m-auto partners-main-cont'>
            <main className='text-cont'>
                <h2>Trusted by Top Brands</h2>
                <p>Our furniture is chosen by leading brands for their quality and design.</p>
            </main>
            <figure className='brands-logo-cont'>
                <img src={Logo1} alt="" />
                <img src={Logo2} alt="" />
                <img src={Logo3} alt="" />
                <img src={Logo4} alt="" />
                <img src={Logo5} alt="" />
            </figure>

            <Carousel className='carousel-main'>
                <Carousel.Item className='carousel-item' >
                    <img
                    className="d-block w-100"
                    src={Carousel1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Living Room Inspiration</h3>
                    <p>Create a cozy and stylish living room with our furniture.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Carousel2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Dining Room Elegance</h3>
                    <p>Elevate your dining experience with our elegant dining sets.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Carousel3}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Bedroom Comfort</h3>
                    <p>Transform your bedroom into a relaxing retreat with our beds and storage solutions.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                {/* Add more Carousel.Items as needed */}
            </Carousel>
        </section>
    )
}

export default Partners
