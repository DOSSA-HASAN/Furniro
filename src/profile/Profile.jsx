import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../navbar/NavBar'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { db } from '../firebaseconfig/FirebaseConfig'
import { productsContext } from '../ProductsContext'
import './profile.css'

function Profile() {

    //users data
    const { userData, cart, fetchCartItem } = useContext(productsContext)

    const [searchText, setSearchText] = useState('')

    //products in the users cart document
    const [fetchedProducts, setFetchedProducts] = useState([])

    //filtered products based on searchText
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        if(userData){
            const getCartInfo = async () => {
                try {
                    const cartDocs = await getDocs(collection(db, "users", userData.uid, "cart"))
                    setFetchedProducts(cartDocs.docs.map((doc) => ({...doc.data(), id: doc.id})))
                    setFilteredProducts(cartDocs.docs.map((doc) => ({...doc.data(), id: doc.id})))
                    console.log(filteredProducts)
                    console.log(fetchedProducts)
                    fetchCartItem()
                } catch (error) {
                    console.log(error.message)
                }
            }
            getCartInfo()
        }
    }, [userData, cart])

    const handleDelete = async (id) => {
        const docRef = doc(db, "users", userData.uid, "cart", id)
        await deleteDoc(docRef)
    }

    return (
        <>
            <NavBar />
            <section>
                <table className='cart-table'>
                    <tr className='table-header'>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                {filteredProducts ? 
                    filteredProducts.map((product) => (
                        <>
                            <tr key={product.id}>
                                <td className='img-row'><img src={product.image} alt="" /></td>
                                <td><p>{product.productPrice} $</p></td>
                                <td><p>{product.productName}</p></td>
                                <td><p className='quantity-box'>{product.quantity}</p></td>
                                <td><p>{product.productPrice * product.quantity} $</p></td>
                                <td onClick={() => handleDelete(product.id)}><i className="fa-solid fa-trash"></i></td>
                            </tr>
                        </>
                        
                    ))

                    :
                    <p>Your cart is empty, click here to start shopping</p>

                }
                </table>

                {filteredProducts && 
                <div className="checkout-btn-cont">
                    <button className='checkout-btn' >Checkout All Items</button>
                </div>
                }
                
            </section>
        </>
    )
}

export default Profile
