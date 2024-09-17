import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import '../navbar/navbar.css'

function NavBar() {

    const [prevScroll, setPrevScroll] = useState(window.pageYOffset)
    const [isFloating, setIsFloating] = useState(false);
    const [isVisible, setIsVisible] = useState(true)

    const handleScroll = () => {
        const currentScroll = window.pageYOffset;
        
        if( currentScroll > prevScroll && currentScroll > 100){
            setIsVisible(false)
            console.log(isVisible)
        }
        else{
            setIsVisible(true)
            console.log(isVisible)
        }

        if(currentScroll > 50){
            setIsFloating(true)
            console.log(isFloating)
        }
        else{
            setIsFloating(false);
            console.log(isFloating)
        }

        setPrevScroll(currentScroll)

    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => { window.addEventListener('scroll', handleScroll)} 
    }, [prevScroll])
    
    const [menuVisible , setMenuVisible] = useState(false)


    return (
        <>
            <header className='nav-header'>
                <main className='m-auto nav-cont'>
                    <div className="logo-cont">
                        <img src={Logo} alt="" srcset="" />
                    </div>

                    <div className="menu-btn-cont" onClick={() => setMenuVisible(!menuVisible)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    {/* convert these to links */}
                    <nav className={`nav-links-cont ${menuVisible ? "mobile-menu links-transition" : ""}`}>
                        <div>
                            <p>Home</p>
                            <span></span>
                        </div>

                        <div>
                            <p>Shop</p>
                            <span></span>
                        </div>

                        <div>
                            <p>Product Detail</p>
                            <span></span>
                        </div>
                    </nav>

                    <div className='info-cont'>
                        <div className='join-us-cont'>
                            <p>Join Us</p>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>

                        <div className='contact-us-cont'>
                            <p>Contact Us</p>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>

                    </div>
                </main>

            </header>
        </>
    )
}

export default NavBar
