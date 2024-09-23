import React from 'react'
import TransformHome from '../assets/transforamtion.jpeg'
import './transformation.css'
import { Link } from 'react-router-dom'

function Transformation() {
    return (
        <section className='m-auto transformation-main-cont'>
            <h2>Transform Your Home</h2>
            <p>Discover the perfect furniture pieces to elevate your living space.</p>

            <div className="btn-cont">
                <Link to={'/shop'}><button className='shop-btn'>Shop Now</button></Link>
                <button className='more-btn'>Learn More<i class="fa-solid fa-arrow-right"></i></button>
            </div>

            <figure className='new-home'>
                <img src={TransformHome} alt="" />
            </figure>
        </section>
    )
}

export default Transformation
