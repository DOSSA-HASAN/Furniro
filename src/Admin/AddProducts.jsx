import React, { useContext, useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import { productsContext } from '../ProductsContext'
import './addproducts.css'
import NavBar from '../navbar/NavBar'
import { setDoc } from 'firebase/firestore'
import { storage } from '../firebaseconfig/FirebaseConfig'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { nanoid } from 'nanoid'

function AddProducts() {

    const { furnitureItems } = useContext(productsContext);

    const [productName, setProductName] =useState(null)
    const [productType, setProductType] =useState(null)
    const [productDescription, setProductDescription] =useState(null)
    const [quantityAvailable, setQuantityavailable] =useState(null)
    const [productWeight, setProductWeight] = useState(null)
    const [productImage, setProductImage] = useState(null)
    const [productDemoImage, setProductDemoImage] = useState(null)

    useEffect(() => {
        if(productImage){
        setProductDemoImage(URL.createObjectURL(productImage))
            const DemoImageUrl = URL.createObjectURL(productImage)
            setProductDemoImage(DemoImageUrl)
        }
    }, [productImage])

    const handleAddProducts = async (e) => {
        e.preventDefault();

        //adding img
        const storageRef = ref(storage, `product-images`)
        const snapshot = await uploadBytes(storageRef, productImage)
        const imageURl = await getDownloadURL(snapshot.ref)
        console.log(imageURl)

        await setDoc((db, "product-doc", nanoid), {
            productName,
            productType, 
            productDescription,
            quantityAvailable, 
            productWeight,
            image: imageURl
        })
    }

    return (
        <>
        <NavBar />
        <section className='add-products-section m-auto'>
            <form className='add-products-form'>
                <span>
                    <label htmlFor="name">Product name</label>
                    <input type="text" id='name' placeholder='Enter product name' required onChange={(e) => setProductName(e.target.value.toUpperCase())}/>
                </span>

                <span>
                    <label htmlFor="type">Product Type</label>
                    <select id="type" required onChange={(e) => setProductType(e.target.value.toUpperCase())}>
                        <option value="" selected hidden>Select Product Type</option>
                        { furnitureItems.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                        )) }
                    </select>
                </span>

                <span>
                    <label htmlFor="description">Description</label>
                    <input type="text" id='description' placeholder='Enter product description' required onChange={(e) => setProductDescription(e.target.value.toUpperCase())}/>
                </span>

                <span>
                    <label htmlFor="quantity">Quantity Available</label>
                    <input type="number" id='quantity' placeholder='Ente available quantity' required onChange={(e) => setQuantityavailable(e.target.value.toUpperCase())}/>
                </span>

                <span>
                    <label htmlFor="weight">Product Weight</label>
                    <input type="number" id='weight' placeholder='Enter product net weight' required onChange={(e) => setProductWeight(e.target.value)}/>
                </span>

                <span>
                    <label htmlFor="image">Product Image</label>
                    <input type="file" id='image' placeholder='Select Product Image' required onChange={(e) => setProductImage(e.target.files[0])}/>
                </span>
                {productDemoImage ?
                    <div>
                        <img src={productDemoImage} alt="" />
                    </div>
                    :
                    <div>
                        <p>No product image currenlty selected</p>
                    </div>
                }
            </form>
        </section>
        <Footer />
        </>
        
    )
}

export default AddProducts
