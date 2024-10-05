import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import { useParams } from 'react-router'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebaseconfig/FirebaseConfig'
import { productsContext } from '../ProductsContext'

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

    useEffect(() => {
        try {
            const fetchProduct = async () => {
                const docRef = doc(db, "product", id)
                const snapShot = await getDoc(docRef)
                setProduct({...snapShot.data(), id:snapShot.id})
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
                    <form action="">
                        <span className='names-cont'>
                            <label htmlFor="fname">First Name</label>
                            <input type="text" id='fnam' onChange={(e) => setFirstName(e.target.value)} required />

                            <label htmlFor="lname">Last Name</label>
                            <input type="text" id='lname' onChange={(e) => setLastName(e.target.value)} required />
                        </span>
                        
                        <span>
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
                            <input type="tel" id="phone" value={zipcode} onChange={(e) => setZipcode(e.target.value)}/>
                        </span>
                    </form>
                </article>
            </section>
            <Footer />
        </>
    )
}

export default Checkout
