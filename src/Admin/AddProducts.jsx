import React, { useContext, useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import { productsContext } from '../ProductsContext'
import './addproducts.css'
import NavBar from '../navbar/NavBar'
import { setDoc, doc } from 'firebase/firestore'
import { storage, db } from '../firebaseconfig/FirebaseConfig'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { nanoid } from 'nanoid'

function AddProducts() {

    const { furnitureItems } = useContext(productsContext);

    const [productName, setProductName] =useState("")
    const [productType, setProductType] =useState("")
    const [productDescription, setProductDescription] =useState("")
    const [quantityAvailable, setQuantityavailable] =useState("")
    const [productWeight, setProductWeight] = useState("")
    const [productImage, setProductImage] = useState("")
    const [productDemoImage, setProductDemoImage] = useState("")

    const [successMssg, setSuccessMssg] = useState('');
    const [errorMssg, setErrorMssg] = useState('');

    useEffect(() => {
        if(productImage){
        setProductDemoImage(URL.createObjectURL(productImage))
            const DemoImageUrl = URL.createObjectURL(productImage)
            setProductDemoImage(DemoImageUrl)
        }
    }, [productImage])

    const handleAddProducts = async (e) => {
        e.preventDefault();

        if(productImage){
            const docID = nanoid()

            try {
                //adding img
                const storageRef = ref(storage, `product-images/${productType.toLowerCase() + docID}`)
                const snapshot = await uploadBytes(storageRef, productImage)
                const imageURl = await getDownloadURL(snapshot.ref)
                console.log(imageURl)
    
                await setDoc(doc(db, `product-${productType}`, docID),{
                    productName,
                    productType, 
                    productDescription,
                    quantityAvailable, 
                    productWeight,
                    image: imageURl
                })
    
                setSuccessMssg("Successfully added Product.")
                setErrorMssg("")
    
            } catch (error) {
                setErrorMssg(error.message)
                setSuccessMssg("")
            }
            finally{
                setProductName("")
                setProductType("")
                setProductDescription("")
                setQuantityavailable("")
                setProductWeight("")
                setProductImage("")
                setProductDemoImage("")
            }
        }
        else{
            setErrorMssg("Please fill all required fields")
            setSuccessMssg("")
        }

        

        

    }

    return (
        <>
        <NavBar />
        <section className='add-products-section m-auto'>
            {successMssg && 
                <div className="success-mssg-cont">
                    <p>{successMssg}</p>
                </div>
            }

            {errorMssg && 
                <div className="error-mssg-cont">
                    <p>{errorMssg}</p>
                </div>
            }
            <form className='add-products-form' onSubmit={handleAddProducts}>
                <span>
                    <label htmlFor="name">Product name</label>
                    <input type="text" id='name' value={productName} placeholder='Enter product name' required onChange={(e) => setProductName(e.target.value.toUpperCase())}/>
                </span>

                <span>
                    <label htmlFor="type">Product Type</label>
                    <select id="type" value={productType} required onChange={(e) => setProductType(e.target.value.toLowerCase())}>
                        <option value="" selected hidden>Select Product Type</option>
                        { furnitureItems.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                        )) }
                    </select>
                </span>

                <span>
                    <label htmlFor="description">Description</label>
                    <input type="text" value={productDescription} id='description' placeholder='Enter product description' required onChange={(e) => setProductDescription(e.target.value.toUpperCase())}/>
                </span>

                <span>
                    <label htmlFor="quantity">Quantity Available</label>
                    <input type="number" value={quantityAvailable} id='quantity' placeholder='Ente available quantity' required onChange={(e) => setQuantityavailable(e.target.value.toUpperCase())}/>
                </span>

                <span>
                    <label htmlFor="weight">Product Weight</label>
                    <input type="number" value={productWeight} id='weight' placeholder='Enter product net weight' required onChange={(e) => setProductWeight(e.target.value)}/>
                </span>

                <span>
                    <label htmlFor="image">Product Image</label>
                    <input type="file" id='image' placeholder='Select Product Image' required onChange={(e) => setProductImage(e.target.files[0])}/>
                </span>
                {productDemoImage &&
                    <div>
                        <img src={productDemoImage} alt="" />
                    </div>
                }
                <div className="submit-btn-cont">
                    <button type='submit'>Add Product</button>
                </div>
            </form>
        </section>
        <Footer />
        </>
        
    )
}

export default AddProducts
