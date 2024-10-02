import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import NavBar from '../navbar/Navbar'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebaseconfig/FirebaseConfig'
import Footer from '../footer/Footer'

function SpecificProduct() {

    const { id } = useParams()

    //variable to hold products info after fetch
    const [product, setProduct] = useState([])

    //number to add to cart
    const [counter, setCounter] = useState(1)
    //handle cart counter
    const handleCartCounterIncrement = () => {
        setCounter(counter + 1)
    }

    const handleCartCounterDecrement = () => {
        if(counter > 1){
            setCounter(counter - 1)
        }
    }
    
    //fetch doc with matching id
    useEffect(() => {
        const getProductInfo = async () => {
            const docRef = doc(db, "product", id)
            const snapShot = await getDoc(docRef)
            setProduct(snapShot.data())
        }
        getProductInfo()
    }, [])

    return (
        <>
            <NavBar />
            <section className='m-auto specific-product-section'>
                {product ? 
                <>
                    <figure className='product-img-cont'>
                        <img src={product.image} alt="" />
                    </figure>

                    <article className='prodcut-info-cont'>
                        <h1>{product.productName}</h1>
                        <div>
                            <p className='price'>{product.productPrice}$</p>
                            <p className='description'>{product.productDescription}</p>
                        </div>

                        <div className="purchase-btn-cont">
                            <span className='add-to-cart-cont'>
                                <div className="cart-counter">
                                    <button onClick={handleCartCounterIncrement}>+</button>
                                    <p>{counter}</p>
                                    <button onClick={handleCartCounterDecrement}>-</button>
                                </div>
                                <button className='add-to-cart-btn'>Add to Cart</button>
                            </span>
                            
                            
                            <span>
                                <button className='buy-btn'>Buy Now</button>
                            </span>
                        </div>
                    </article>
                </>

                : <p>Loading...</p>}
            </section>
            <Footer />
        </>
        
    )
}

export default SpecificProduct
