import React from 'react'
import './footer.css'

function Footer() {
    return (
        <footer className='footer'>
            <p className='copy'>&copy; 2023 Furniro. All Rights Reserved.</p>

            <main className='footer-links'>
                <div className="links">
                    <p>About Us</p>
                    <p>Our Services</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Support</p>
                </div>

                
                <div className="social-cont">
                    <span>|</span>
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-meta"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </main>
        </footer>
    )
}

export default Footer
