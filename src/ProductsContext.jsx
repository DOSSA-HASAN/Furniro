import React, { createContext, useEffect, useState } from 'react'
import SofaImg from './assets/sofa.jpeg'
import ChairsImg from './assets/chairs.jpeg'
import TableImg from './assets/tables.jpeg'
import BedsImg from './assets/beds.jpeg'
import StorageImg from './assets/storage.jpeg'
import LightingImg from './assets/lights.jpeg'
import ModernSofas from './assets/modern-sofas.jpeg'
import StylishChairs from './assets/stylish-chairs.jpeg'
import ContemporaryTables from './assets/contemporary-tables.jpeg'
import LuxuryBeds from './assets/luxury-beds.jpeg'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from './firebaseconfig/FirebaseConfig'
import { doc, getDoc } from 'firebase/firestore'

const productsContext = createContext();

function ProductsContext({ children }) {

    const [productsList, setProductsList ] = useState({
        "Sofas" : {ImgURL: SofaImg},
        "Chairs" : {ImgURL: ChairsImg},
        "Tables" : {ImgURL: TableImg},
        "Beds" : {ImgURL: BedsImg},
        "Storage" : {ImgURL: StorageImg},
        "Lighting" : {ImgURL: LightingImg}
    })

    const [figItems, setFigItems] = useState([
        {ImgURL: ModernSofas, classname: "fa-solid fa-couch", text: "Modern Sofas<br/>Comfort & Style"},
        {ImgURL: StylishChairs, classname: "fa-solid fa-chair", text: "Contemporary Tables<br/>Functionality & Design"},
        {ImgURL: ContemporaryTables, classname: "fa-solid fa-table", text: "Contemporary Tables<br/>Functionality & Design"},
        {ImgURL: LuxuryBeds, classname: "fa-solid fa-bed", text: "Luxury Beds <br/>Rest & Relaxation"}
    ])

    const furnitureItems = [
        "Sofas",
        "Sectionals",
        "Recliners",
        "Accent Chairs",
        "Loveseats",
        "Ottomans",
        "Coffee Tables",
        "End Tables",
        "Console Tables",
        "TV Stands",
        "Entertainment Centers",
        "Bookshelves",
        "Dressers",
        "Nightstands",
        "Beds",
        "Headboards",
        "Mattresses",
        "Wardrobes",
        "Dining Tables",
        "Dining Chairs",
        "Bar Stools",
        "Buffets",
        "Sideboards",
        "China Cabinets",
        "Desks",
        "Office Chairs",
        "Filing Cabinets",
        "Conference Tables",
        "Patio Furniture",
        "Outdoor Seating",
        "Outdoor Tables",
        "Outdoor Umbrellas",
        "Rugs",
        "Lighting",
        "Lamps",
        "Chandeliers",
        "Mirrors",
        "Room Dividers",
        "Shelving Units",
        "Storage Benches",
        "Hall Trees",
        "Vanities",
        "Bunk Beds",
        "Chaise Lounges",
        "Cabinets",
        "Console Cabinets"
        ];

    const [userData, setUserData] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if(user){
                const docRef = doc(db, "users", user.uid)
                const userDoc = await getDoc(docRef)

                if(userDoc.exists()){
                    setUserData(userDoc.data())
                    setUser(userDoc.data())
                }
                else{
                    setUserData(null)
                    setUser(null)
                }
            }
        })
        return () => unsubscribe();
    }, )
    
    return (
        <productsContext.Provider value={{productsList, figItems, furnitureItems, setUserData, userData, user}}>
            { children }
        </productsContext.Provider>
    )
}

export { ProductsContext, productsContext }
