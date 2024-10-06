import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { useParams } from 'react-router'
import { count, doc, getDoc } from 'firebase/firestore'
import { db } from '../firebaseconfig/FirebaseConfig'
import { productsContext } from '../ProductsContext'
import './Hero.css'

function Checkout() {

    const { countries } = useContext(productsContext)

    const { id } = useParams()
    const [product, setProduct] = useState([])

    //shipping info
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [country, setCountry] = useState("")
    const [street, setStreet] = useState("")
    const [town, setTown] = useState("")
    const [province, setProvince] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [additionalInfo, setAdditionalInfo] = useState("")

    //set quantity
    const [counter, setCounter] = useState(1)

    const handleCounterIncrement = () => {
        if(counter >= 1 && counter <= product.quantityAvailable){
            setCounter(counter + 1)
        }
    }

    const handleCounterDecrement = () => {
        if(counter > 1){
            setCounter(counter - 1)
        }
    }


    useEffect(() => {
        try {
            const fetchProduct = async () => {
                const docRef = doc(db, "product", id)
                const snapShot = await getDoc(docRef)
                setProduct({...snapShot.data(), id:snapShot.id})
                console.log(product)
            }
            fetchProduct()
        } catch (error) {
            console.log(error.message)
        }
    }, [])


    return (
        <>
            <NavBar />
            <section className='m-auto checkout-section'>
                <article className='shipping-info-cont'>
                    <h1>Billing details</h1>
                    <form action="" className='billing-form'>
                        <div className='names-cont'>
                            <span>
                                <label htmlFor="fname">First Name</label>
                                <input type="text" value={firstName} id='fnam' onChange={(e) => setFirstName(e.target.value)} required />
                            </span>
                            <span>
                                <label htmlFor="lname">Last Name</label>
                                <input type="text" value={lastName} id='lname' onChange={(e) => setLastName(e.target.value)} required />
                            </span>
                        </div>
                        
                        <span className='country-cont'>
                            <label htmlFor="country">Country / Region</label>
                            <select id="country" onChange={(e) => setCountry(e.target.value)}>
                                <option value="" selected hidden>Select Country</option>
                                {Object.entries(countries).map(([key, value]) => (
                                    <option value="value" key={key}>{value}</option>
                                ))}
                            </select>
                        </span>

                        <span>
                            <label htmlFor="town">Town / City</label>
                            <input type="text" id='town' value={town} onChange={(e) => setTown(e.target.value)}/>
                        </span>

                        <span>
                            <label htmlFor="province">Province</label>
                            <input type="text" id="province" value={province} onChange={(e) => setProvince(e.target.value)}/>
                        </span>
                        
                        <span>
                            <label htmlFor="street">Street address</label>
                            <input type="text" id="street" value={street} onChange={(e) => setStreet(e.target.value)}/>
                        </span>

                        <span>
                            <label htmlFor="zipcode">Zip code</label>
                            <input type="text" id="zipcode" value={zipcode} onChange={(e) => setZipcode(e.target.value)}/>
                        </span>

                        <span>
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        </span>

                        <span>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </span>

                        <span>
                            <label htmlFor="add-info">Additional Information</label>
                            <input type="text" value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)}/>
                        </span>
                    </form>
                </article>

                <article className='products-list-checkout-cont'>
                    {product ?
                    <>
                        <span className='titles'>
                            <h1>Product</h1>
                            <h1>Subtotal</h1>
                        </span>
                        
                        <span>
                            <p>Quantity</p>
                            <div className="quantity-cont">
                                <button onClick={handleCounterIncrement}>+</button>
                                <p>{counter}</p>
                                <button onClick={handleCounterDecrement}>-</button>
                            </div>
                        </span>

                        <span>
                            <p>{product.productName} x {counter}</p>
                            <p>{product.productPrice * counter} $</p>
                        </span>

                        <span className='total-price-cont'>
                            <p>Total</p>
                            <p>{product.productPrice * counter} $</p>
                        </span>
                        
                    </> 
                    :
                        <p>Loading...</p>
                    }
                </article>
            </section>
            <Footer />
        </>
    )
}

export default Checkout
