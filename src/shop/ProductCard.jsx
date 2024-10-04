import { collection, getDocs, limit, query, snapshotEqual, startAfter } from 'firebase/firestore';
import { db } from '../firebaseconfig/FirebaseConfig'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function ProductCard() {


    const [fetchedProducts, setFetchedProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [lastVisible, setLastVisible] = useState(null)
    const itemsPerPage = 20;

    const [errorMssg, setErrorMssg] = useState("")
    const [successMssg, setSuccessMssg] = useState("")

    const handleSearch = (e) => {
        let filteredSearch = fetchedProducts.filter((product) => product.productName.toUpperCase().includes(e.toUpperCase())) 
        setFilteredProducts(filteredSearch)
    }

    const fetchProducts = async () => {
        setLoading(true)

        try{
                const snapShot = await getDocs(collection(db, "product"))
                setFetchedProducts(snapShot.docs.map((doc) => ({...doc.data(), id: doc.id})))
                setFilteredProducts(snapShot.docs.map((doc) => ({...doc.data(), id: doc.id})))
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
                <header className='search-and-sort-cont'>
                    <input type="text" placeholder='Search for consice products' onChange={(e) => handleSearch(e.target.value)}/>

                    {/* <div className="filter-cont">
                        <select name="" id="">
                            <option value="none" selected>Sort By</option>
                            <option value="price" >Price asc</option>
                            <option value="available" >Available</option>
                        </select>
                    </div> */}
                </header>
                    
                    <main className='fetched-products-main-cont'>
                        {filteredProducts && filteredProducts.map((product) => (
                            <Link to={`product/${product.id}`}>
                                <div className='fetched-product' key={product.id}>
                                    <img src={product.image} alt="" />
                                    <p>{product.productName}</p>
                                </div>
                            </Link>
                        ))}
                    </main>

                    
            </section>
        </>
    )
}

export default ProductCard
