import React, { useContext } from 'react'
import './hero.css'
import { productsContext } from '../ProductsContext'

function Hero() {

    const { productsList } = useContext(productsContext);

    return (
        <>
        <section className='m-auto'>

            <main className="hero-text">
                <h1>Discover Your Dream Furniture</h1>
                <p>Stylish and affordable pieces for every room.</p>
            </main>

            <article className='product-card-cont'>
                {Object.entries(productsList).map(([key, value], index) => (
                    <div className="product-card" key={index}>
                        <h2>{key}</h2>
                        <img src={value.ImgURL} alt="" />
                    </div>
                ))}
            </article>

            <div className="all-products-btn-cont">
                <button>View All Products <i class="fa-solid fa-arrow-right"></i></button>
            </div>

        </section>





        </>
    )
}

export default Hero
