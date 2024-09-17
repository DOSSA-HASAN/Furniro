import React, { useContext, useState } from 'react'
import '../Home/section02.css'
import StylishChairs from '../assets/stylish-chairs.jpeg'
import { productsContext } from '../ProductsContext'

function Section02() {

    const { figItems } = useContext(productsContext)

    const [carId, setCardId] = useState(0)
    const handleSyles = (id) => {
        setCardId(id);
    }

    return (
        <>
            <section className="m-auto bg-linear">
                <main>
                    <article className='text'>
                        <h3>Sleek & Modern Designs</h3>
                        <h1>Elevate Your Living Space</h1>
                        <p>Find the perfect furniture to complement your modern lifestyle.</p>

                        <div className="goals">
                            <span className="goal">
                                <i className="fa-solid fa-star"></i>
                                <p>Top Quality</p>
                            </span>
                            <span className="goal">
                                <i className="fa-solid fa-truck"></i>
                                <p>Fast Delivery</p>
                            </span>
                            <span className="goal">
                                <i className="fa-solid fa-thumbs-up"></i>
                                <p>Customer Satisfaction</p>
                            </span>
                        </div>

                        <div className="button-cont">
                            <button className='shop-now-btn'>Shop Now <i class="fa-solid fa-arrow-right"></i></button>
                            <button className='learn-more-btn'>Learn More</button>
                        </div>
                    </article>
                </main>

                <figure className='figure-container'>
                    {figItems.map((item, index) => (
                        <div className={`fig-item ${carId == index ? "w-250" : ''}`} key={index} onMouseEnter={() => handleSyles(index)}>
                            <img src={item.ImgURL} alt="" />
                            <figcaption className={`caption-text ${carId == index ? "show-caption-text" : ""}`}>
                                <i className={item.classname}></i>
                                <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                            </figcaption>
                        </div>
                    ))}
                </figure>
                
            </section>
        </>
    )
}

export default Section02
