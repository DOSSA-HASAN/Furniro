import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../navbar/Navbar'
import { collection, doc, getDocs } from 'firebase/firestore'
import { db } from '../firebaseconfig/FirebaseConfig'
import { productsContext } from '../ProductsContext'

function Profile() {

    //users data
    const { userData } = useContext(productsContext)

    const [searchText, setSearchText] = useState('')

    //products in the users cart document
    const [fetchedProducts, setFetchedProducts] = useState([])

    //filtered products based on searchText
    const [filteredProducts, setFilteredProducts] = useState([])

    try {
            //fetch products on load
            useEffect(() => {
                const fetchProductsFromCart = async () => {
                    // const cartRef = doc(db, "users", userData.uid, "cart")
                    const snapShot = await getDocs(collection(db, "users", userData.uid, "cart"))
                    setFetchedProducts(snapShot.docs.map((doc) => ({...doc.data(), id: doc.id})))
                    setFilteredProducts(snapShot.docs.map((doc) => ({...doc.data(), id: doc.id})))
                    if(fetchedProducts){
                        console.log(fetchedProducts)
                        console.log(filteredProducts)
                    }
                }
                return() => fetchProductsFromCart()
            }, [])
    } catch (error) {
        console.log(error.message)
    }


    // const handleSearchInCart = (e) => {
    //     setSearchText(e)
    //     const searchText = e;
    //     const filtered = fetchedProducts.filter((product) => product.productName.toUpperCase().includes(searchText.toUpperCase()))

    //     setFilteredProducts(...filtered)

    // }

    return (
        <>
            <NavBar />
            <section>
                {/* <input type="text" value={searchText} onChange={(e) => handleSearchInCart(e.target.value)}/> */}

                <main>
                {filteredProducts ? 

                    filteredProducts.map((product) => {
                        <div key={product.productID}>
                            <p>{product.productName}</p>

                        </div>
                    })

                    :
                    <p>Your cart is empty, click here to start shopping</p>

                }
                </main>

                
            </section>
        </>
    )
}

export default Profile
