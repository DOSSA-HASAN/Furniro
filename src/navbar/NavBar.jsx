import React, { useContext, useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import '../navbar/navbar.css'
import { Link } from 'react-router-dom';
import { productsContext } from '../ProductsContext';

function NavBar() {

    const [prevScroll, setPrevScroll] = useState(window.pageYOffset)
    const [isFloating, setIsFloating] = useState(false);
    const [isVisible, setIsVisible] = useState(true)

    const handleScroll = () => {
        const currentScroll = window.pageYOffset;
        
        if( currentScroll > prevScroll && currentScroll > 100){
            setIsVisible(false)
            // console.log(isVisible)
        }
        else{
            setIsVisible(true)
            // console.log(isVisible)
        }

        if(currentScroll > 50){
            setIsFloating(true)
            // console.log(isFloating)
        }
        else{
            setIsFloating(false);
            // console.log(isFloating)
        }

        setPrevScroll(currentScroll)

    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        return () => { window.addEventListener('scroll', handleScroll)} 
    }, [prevScroll])
    
    const [menuVisible , setMenuVisible] = useState(false)

    const { user } = useContext(productsContext)
    // console.log(user)



    return (
        <>
            <header className='nav-header'>
                <main className='m-auto nav-cont'>
                    <Link to={'/'}>
                        <div className="logo-cont">
                            <img src={Logo} alt="" srcset="" />
                        </div>
                    </Link>

                    <div className="menu-btn-cont" onClick={() => setMenuVisible(!menuVisible)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    {/* convert these to links */}
                    <nav className={`nav-links-cont ${menuVisible ? "mobile-menu links-transition" : ""}`}>
                        <div>
                            <Link to={'/'}>
                                <p>Home</p>
                                <span></span>
                            </Link>
                        </div>

                        <div>
                            <Link to={'/shop'}>
                                <p>Shop</p>
                                <span></span>
                            </Link>
                        </div>

                        <div>
                            <Link to={'/add-products'}>
                                <p>Product Detail</p>
                                <span></span>
                            </Link>
                        </div>
                    </nav>

                    <div className='info-cont'>
                        <div className='join-us-cont'>
                            {user ? <Link to={'/profile'}>
                                <p>{user.email}</p>
                                <i class="fa-solid fa-arrow-right"></i>
                            </Link>:
                            <Link to={'/signup'}>
                                <p>Join Us</p>
                                <i class="fa-solid fa-arrow-right"></i>
                            </Link>
                            }
                        </div>

                        <div className='contact-us-cont'>
                            <Link to={'/contact'}>
                                <p>Contact Us</p>
                                <i class="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>

                    </div>
                </main>

            </header>
        </>
    )
}

export default NavBar
