import React, { createContext, useState } from 'react'
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
    console.log(figItems)
    return (
        <productsContext.Provider value={{productsList, figItems}}>
            { children }
        </productsContext.Provider>
    )
}

export { ProductsContext, productsContext }
