import { collection, getDocs, limit, query, snapshotEqual, startAfter } from 'firebase/firestore';
import { db } from '../firebaseconfig/FirebaseConfig'
import React, { useEffect, useState } from 'react'

function ProductCard() {

    const [searchText, setSearchText] = useState("")

    const [fetchedProducts, setFetchedProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const [lastVisible, setLastVisible] = useState(null)
    const itemsPerPage = 20;

    const [errorMssg, setErrorMssg] = useState("")
    const [successMssg, setSuccessMssg] = useState("")

    const fetchProducts = async () => {
        setLoading(true)

        try{
                //query to get products from firebase only fetches the specified amount
                let queryRef = query(collection(db, "product"), limit(itemsPerPage))

                //will start fetching after he last document if its present
                if(lastVisible){
                    queryRef = query(collection(db, "product"), limit(itemsPerPage), startAfter(lastVisible))
                }

                //get the docs based on the query
                const snapShot = await getDocs(queryRef)

                //getting the last product from results fetched
                let lastProduct = snapShot.docs[snapShot.docs.length - 1]
                setLastVisible(lastProduct)

                const newProducts = snapShot.docs.map((doc) => ({...doc.data(), id: doc.id}))
                setFetchedProducts((prevProducst) => [...prevProducst, ...newProducts])
                console.log(fetchedProducts)
            }
        catch(error){
            setErrorMssg("Error fetching products " + error.message)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchProducts()
    }, [])


    return (
        <>
            <section className='m-auto products-list-section'>
                <header>
                    <input type="text" placeholder='Search for consice products' onChange={(e) => setSearchText(e.target.value)}/>

                    <div className="filter-cont">
                        <select name="" id="">
                            <option value="none" selected>Sort By</option>
                            <option value="price" >Price asc</option>
                            <option value="available" >Available</option>
                        </select>
                    </div>

                    {fetchedProducts && fetchedProducts.map((product) => (
                        <div key={product.id}>
                            <img src={product.image} alt="" />
                            <p>{product.productName}</p>
                        </div>
                    ))}
                </header>
            </section>
        </>
    )
}

export default ProductCard
