import React from 'react'
import NavBar from '../navbar/NavBar'
import Footer from '../footer/Footer'
import './contact.css'

function Contact() {
    return (
        <section className='contact-us-main-cont'>
            <NavBar />
            <main className='contact-info'>
                <article className='left-side'>
                    <h1>Have Questions or Need Help?</h1>
                    <div>
                        <p>Monday-Friday, 9:00 am to 6:00 pm</p>
                        <p>Our team is here to assist you with any inquiries.</p>
                    </div>
                </article>
                <article className='right-side'>
                    <div className='email-cont'>
                        <p>Reach Out to Us</p>
                        <a href='mailto:support@furniro'>support@furniro</a>
                    </div>
                    <div className='socials-cont'>
                        <span><p>Follow Us</p></span>
                        <span>
                            <i class="fa-brands fa-x-twitter"></i>
                            <i class="fa-brands fa-meta"></i>
                            <i class="fa-brands fa-instagram"></i>
                        </span>
                    </div>
                </article>
            </main>
            <Footer />
        </section>
    )
}

export default Contact
