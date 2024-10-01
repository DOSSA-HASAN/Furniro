import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import NavBar from '../navbar/Navbar'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebaseconfig/FirebaseConfig'

function SpecificProduct() {

    const { id } = useParams()

    //variable to hold products info after fetch
    const [product, setProduct] = useState([])
    
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
            <section className='m-auto'>
                {product ? 
                <>
                    <figure>
                        <img src={product.image} alt="" />
                    </figure>

                    <article>
                        <h1>{product.productName}</h1>
                        <div>
                            <p>{product.price}</p>
                        </div>

                        <div className="purchase-btn-cont">
                            <button>Buy Now</button>
                            <button>Add to Cart</button>
                        </div>
                    </article>
                </>

                : <p>Loading...</p>}
            </section>
        </>
        
    )
}

export default SpecificProduct
