import React from 'react'
import TransformHome from '../assets/transforamtion.jpeg'
import './transformation.css'

function Transformation() {
    return (
        <section className='m-auto transformation-main-cont'>
            <h2>Transform Your Home</h2>
            <p>Discover the perfect furniture pieces to elevate your living space.</p>

            <div className="btn-cont">
                <button className='shop-btn'>Shop Now</button>
                <button className='more-btn'>Learn More<i class="fa-solid fa-arrow-right"></i></button>
            </div>

            <figure className='new-home'>
                <img src={TransformHome} alt="" />
            </figure>
        </section>
    )
}

export default Transformation
