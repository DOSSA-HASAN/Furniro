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
    const [productDimensions, setProductDimensions] = useState({width: 0, height: 0, len: 0})
    const [productImage, setProductImage] = useState("")
    const [productDemoImage, setProductDemoImage] = useState("")
    const [productPrice, setProductPrice] = useState("")

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
    
                await setDoc(doc(db, 'product', docID),{
                    productName,
                    productType, 
                    productDescription,
                    quantityAvailable, 
                    ...productDimensions,
                    productPrice,
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
                setProductDimensions({width: 0, height: 0, len: 0})
                setProductImage("")
                setProductDemoImage("")
                setProductPrice("")
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
                    <select id="type" required onChange={(e) => setProductType(e.target.value.toLowerCase())}>
                        <option value="" selected hidden>Select Product Type</option>
                        { furnitureItems.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                        )) }
                    </select>
                </span>

                <span>
                    <label htmlFor="description">Description</label>
                    <input type="text" value={productDescription} id='description' placeholder='Enter product description' required onChange={(e) => setProductDescription(e.target.value.toUpperCase())} maxLength={300}/>
                </span>

                <span>
                    <label htmlFor="price">Price</label>
                    <input type="number" value={productPrice} id='price' placeholder='Enter product price' required onChange={(e) => setProductPrice(e.target.value)}/>
                </span>

                <span>
                    <label htmlFor="quantity">Quantity Available</label>
                    <input type="number" value={quantityAvailable} id='quantity' placeholder='Ente available quantity' required onChange={(e) => setQuantityavailable(e.target.value.toUpperCase())}/>
                </span>

                <span>
                    <label htmlFor="width">Product Width</label>
                    <input type="number" value={productDimensions.width} id='weight' placeholder='Enter product Width' required onChange={(e) => setProductDimensions((prevState) => ({...prevState, width: e.target.value}))}/>
                </span>

                <span>
                    <label htmlFor="height">Product Height</label>
                    <input type="number" value={productDimensions.height} id='height' placeholder='Enter product Height' required onChange={(e) => setProductDimensions((prevState) => ({...prevState, height: e.target.value}))}/>
                </span>

                <span>
                    <label htmlFor="lenght">Product Lenght</label>
                    <input type="number" value={productDimensions.len} id='lenght' placeholder='Enter product Lenght' required onChange={(e) => setProductDimensions((prevState) => ({...prevState, len: e.target.value}))}/>
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
