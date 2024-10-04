import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import NavBar from '../navbar/Navbar'
import { addDoc, doc, getDoc, increment, updateDoc, setDoc } from 'firebase/firestore'
import { db } from '../firebaseconfig/FirebaseConfig'
import Footer from '../footer/Footer'
import { productsContext } from '../ProductsContext'

function SpecificProduct() {

    const { id } = useParams()

    const [successMssg, setSuccessMssg] = useState("")
    const [errorMssg, setErrorMssg] = useState("")

    const { userData } = useContext(productsContext)

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
            setProduct({...snapShot.data(), productID: id})
            console.log(product)
            console.log(userData)
        }
        getProductInfo()
    }, [])

    const handleAddToCart = async (e) => {
        e.preventDefault();

        console.log("Adding")

        try {
            //check if similar doc exists
            const cartRef = doc(db, "users", userData.uid, "cart", product.productID);

            const cartSnapshot = await getDoc(cartRef)

            if(cartSnapshot.exists()){
                await updateDoc(cartRef, {quantity: increment(counter)})
                setSuccessMssg("Added to cart")
            }
            else{
                await setDoc(doc(db, "users", userData.uid, "cart", product.productID), {
                    quantity: counter,
                    ...product
                })
                setSuccessMssg("Added to cart")
                
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        if(successMssg){
            setTimeout(() => {
                setSuccessMssg("")
            }, 3000)
            setCounter(1)
        }
    }, [successMssg])



    return (
        <>
            <NavBar />
                <div className={successMssg ? 'success-mssg-cont' : ''}>
                    {successMssg ? <p>{successMssg}</p> : ''}
                </div>
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
                            <p className='dimensions'>{product.width} x {product.height} x {product.len}</p>
                        </div>

                        <div className="purchase-btn-cont">
                            <span className='add-to-cart-cont'>
                                <div className="cart-counter">
                                    <button onClick={handleCartCounterIncrement}>+</button>
                                    <p>{counter}</p>
                                    <button onClick={handleCartCounterDecrement}>-</button>
                                </div>
                                <button className='add-to-cart-btn' onClick={handleAddToCart}>Add to Cart</button>
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
