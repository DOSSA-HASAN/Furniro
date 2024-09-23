import React, { useContext } from 'react'
import Footer from '../footer/Footer'
import { productsContext } from '../ProductsContext'
import './addproducts.css'
import NavBar from '../navbar/NavBar'

function AddProducts() {

    const { furnitureItems } = useContext(productsContext);

    return (
        <>
        <NavBar />
        <section className='add-products-section m-auto'>
            <form className='add-products-form'>
                <span>
                    <label htmlFor="name">Product name</label>
                    <input type="text" id='name' placeholder='Enter product name'/>
                </span>

                <span>
                    <label htmlFor="type">Product Type</label>
                    <select id="type">
                        <option value="" selected hidden>Select Product Type</option>
                        { furnitureItems.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                        )) }
                    </select>
                </span>

                <span>
                    <label htmlFor="description">Description</label>
                    <input type="text" id='description' placeholder='Enter product description'/>
                </span>

                <span>
                    <label htmlFor="quantity">Quantity Available</label>
                    <input type="number" id='quantity' placeholder='Ente available quantity'/>
                </span>

                <span>
                    <label htmlFor="weight">Product Weight</label>
                    <input type="number" id='weight' placeholder='Enter product net weight'/>
                </span>

                <span>
                    <label htmlFor="image">Product Image</label>
                    <input type="file" id='image' placeholder='Select Product Image'/>
                </span>
            </form>
        </section>
        <Footer />
        </>
        
    )
}

export default AddProducts
