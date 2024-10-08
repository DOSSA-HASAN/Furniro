import React from 'react'
import './extralinks.css'
import { Link } from 'react-router-dom'

function ExtraLinks() {
    return (
        <section className='links-main-cont'>
            <article className='links-text-cont'>
                <h2>Welcome to Furniro</h2>
                <p>Your destination for sleek and modern furniture.</p>
            </article>

            <main className="links-cont">
                <Link to={'/shop'}>
                <div className="link">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <span>
                        <h4>Shop</h4>
                        <p>Browse our wide range of furniture.</p>
                    </span>
                </div>
                </Link>

                <Link to={'/add-products'}>
                <div className="link">
                    <i class="fa-solid fa-plus"></i>
                    <span>
                        <h4>Add Products</h4>
                        <p>Add new products to your cart.</p>
                    </span>
                </div>
                </Link>

                <Link to={'/login'}>
                <div className="link">
                    <i class="fa-solid fa-user"></i>
                    <span>
                        <h4>Login</h4>
                        <p>Access your account.</p>
                    </span>
                </div>
                </Link>

                <Link to={'/signup'}>
                <div className="link">
                    <i class="fa-solid fa-user-plus"></i>
                    <span>
                        <h4>Signup</h4>
                        <p>Create a new account.</p>
                    </span>
                </div>
                </Link>

                <Link>
                <div className="link">
                    <i class="fa-solid fa-gears"></i>
                    <span>
                        <h4>Admin Panel</h4>
                        <p>Manage your store.</p>
                    </span>
                </div>
                </Link>
            </main>
        </section>
    )
}

export default ExtraLinks
