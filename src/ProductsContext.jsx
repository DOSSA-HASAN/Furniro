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
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'

const productsContext = createContext();

function ProductsContext({ children }) {

    const [userData, setUserData] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if(user){
                const docRef = doc(db, "users", user.uid)
                const userDoc = await getDoc(docRef)

                console.log(user)
                console.log(userDoc)

                if(userDoc.exists()){
                    setUserData({...userDoc.data(), uid: userDoc.id})
                    setUser({...userDoc.data(), uid: userDoc.id})
                }
                else{
                    setUserData(null)
                    setUser(null)
                }
            }
            else{
                    setUserData(null)
                    setUser(null)
            }
        })
        return () => unsubscribe();
    }, [])
    //cart items
    const [cart, setCart] = useState([])

    //fetch products on load
    const fetchCartItem = async () => {
        try {
            if(userData){
                const cartSnapshot = await getDocs(collection(db, `users/${userData.uid}/cart`))
                setCart(cartSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        fetchCartItem()
        console.log("fetching")
    }, [])

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

    const countries = {
        AF: "Afghanistan",
        AL: "Albania",
        DZ: "Algeria",
        AS: "American Samoa",
        AD: "Andorra",
        AO: "Angola",
        AI: "Anguilla",
        AQ: "Antarctica",
        AG: "Antigua and Barbuda",
        AR: "Argentina",
        AM: "Armenia",
        AW: "Aruba",
        AU: "Australia",
        AT: "Austria",
        AZ: "Azerbaijan",
        BS: "Bahamas",
        BH: "Bahrain",
        BD: "Bangladesh",
        BB: "Barbados",
        BY: "Belarus",
        BE: "Belgium",
        BZ: "Belize",
        BJ: "Benin",
        BM: "Bermuda",
        BT: "Bhutan",
        BO: "Bolivia",
        BA: "Bosnia and Herzegovina",
        BW: "Botswana",
        BR: "Brazil",
        IO: "British Indian Ocean Territory",
        VG: "British Virgin Islands",
        BN: "Brunei",
        BG: "Bulgaria",
        BF: "Burkina Faso",
        BI: "Burundi",
        CV: "Cabo Verde",
        KH: "Cambodia",
        CM: "Cameroon",
        CA: "Canada",
        KY: "Cayman Islands",
        CF: "Central African Republic",
        TD: "Chad",
        CL: "Chile",
        CN: "China",
        CX: "Christmas Island",
        CC: "Cocos (Keeling) Islands",
        CO: "Colombia",
        KM: "Comoros",
        CG: "Congo",
        CK: "Cook Islands",
        CR: "Costa Rica",
        HR: "Croatia",
        CU: "Cuba",
        CW: "Curaçao",
        CY: "Cyprus",
        CZ: "Czech Republic",
        CD: "Democratic Republic of the Congo",
        DK: "Denmark",
        DJ: "Djibouti",
        DM: "Dominica",
        DO: "Dominican Republic",
        EC: "Ecuador",
        EG: "Egypt",
        SV: "El Salvador",
        GQ: "Equatorial Guinea",
        ER: "Eritrea",
        EE: "Estonia",
        SZ: "Eswatini",
        ET: "Ethiopia",
        FK: "Falkland Islands",
        FO: "Faroe Islands",
        FJ: "Fiji",
        FI: "Finland",
        FR: "France",
        GF: "French Guiana",
        PF: "French Polynesia",
        GA: "Gabon",
        GM: "Gambia",
        GE: "Georgia",
        DE: "Germany",
        GH: "Ghana",
        GI: "Gibraltar",
        GR: "Greece",
        GL: "Greenland",
        GD: "Grenada",
        GP: "Guadeloupe",
        GU: "Guam",
        GT: "Guatemala",
        GG: "Guernsey",
        GN: "Guinea",
        GW: "Guinea-Bissau",
        GY: "Guyana",
        HT: "Haiti",
        VA: "Holy See",
        HN: "Honduras",
        HK: "Hong Kong",
        HU: "Hungary",
        IS: "Iceland",
        IN: "India",
        ID: "Indonesia",
        IR: "Iran",
        IQ: "Iraq",
        IE: "Ireland",
        IM: "Isle of Man",
        IL: "Israel",
        IT: "Italy",
        CI: "Ivory Coast",
        JM: "Jamaica",
        JP: "Japan",
        JE: "Jersey",
        JO: "Jordan",
        KZ: "Kazakhstan",
        KE: "Kenya",
        KI: "Kiribati",
        KP: "Korea (North)",
        KR: "Korea (South)",
        KW: "Kuwait",
        KG: "Kyrgyzstan",
        LA: "Laos",
        LV: "Latvia",
        LB: "Lebanon",
        LS: "Lesotho",
        LR: "Liberia",
        LY: "Libya",
        LI: "Liechtenstein",
        LT: "Lithuania",
        LU: "Luxembourg",
        MO: "Macau",
        MG: "Madagascar",
        MW: "Malawi",
        MY: "Malaysia",
        MV: "Maldives",
        ML: "Mali",
        MT: "Malta",
        MH: "Marshall Islands",
        MQ: "Martinique",
        MR: "Mauritania",
        MU: "Mauritius",
        YT: "Mayotte",
        MX: "Mexico",
        FM: "Micronesia",
        MD: "Moldova",
        MC: "Monaco",
        MN: "Mongolia",
        ME: "Montenegro",
        MS: "Montserrat",
        MA: "Morocco",
        MZ: "Mozambique",
        MM: "Myanmar",
        NA: "Namibia",
        NR: "Nauru",
        NP: "Nepal",
        NL: "Netherlands",
        NC: "New Caledonia",
        NZ: "New Zealand",
        NI: "Nicaragua",
        NE: "Niger",
        NG: "Nigeria",
        NU: "Niue",
        NF: "Norfolk Island",
        MK: "North Macedonia",
        MP: "Northern Mariana Islands",
        NO: "Norway",
        OM: "Oman",
        PK: "Pakistan",
        PW: "Palau",
        PS: "Palestine",
        PA: "Panama",
        PG: "Papua New Guinea",
        PY: "Paraguay",
        PE: "Peru",
        PH: "Philippines",
        PN: "Pitcairn Islands",
        PL: "Poland",
        PT: "Portugal",
        PR: "Puerto Rico",
        QA: "Qatar",
        RE: "Réunion",
        RO: "Romania",
        RU: "Russia",
        RW: "Rwanda",
        BL: "Saint Barthélemy",
        SH: "Saint Helena",
        KN: "Saint Kitts and Nevis",
        LC: "Saint Lucia",
        MF: "Saint Martin",
        PM: "Saint Pierre and Miquelon",
        VC: "Saint Vincent and the Grenadines",
        WS: "Samoa",
        SM: "San Marino",
        ST: "São Tomé and Príncipe",
        SA: "Saudi Arabia",
        SN: "Senegal",
        RS: "Serbia",
        SC: "Seychelles",
        SL: "Sierra Leone",
        SG: "Singapore",
        SX: "Sint Maarten",
        SK: "Slovakia",
        SI: "Slovenia",
        SB: "Solomon Islands",
        SO: "Somalia",
        ZA: "South Africa",
        SS: "South Sudan",
        ES: "Spain",
        LK: "Sri Lanka",
        SD: "Sudan",
        SR: "Suriname",
        SE: "Sweden",
        CH: "Switzerland",
        SY: "Syria",
        TW: "Taiwan",
        TJ: "Tajikistan",
        TZ: "Tanzania",
        TH: "Thailand",
        TL: "Timor-Leste",
        TG: "Togo",
        TK: "Tokelau",
        TO: "Tonga",
        TT: "Trinidad and Tobago",
        TN: "Tunisia",
        TR: "Turkey",
        TM: "Turkmenistan",
        TC: "Turks and Caicos Islands",
        TV: "Tuvalu",
        UG: "Uganda",
        UA: "Ukraine",
        AE: "United Arab Emirates",
        GB: "United Kingdom",
        US: "United States",
        UY: "Uruguay",
        UZ: "Uzbekistan",
        VU: "Vanuatu",
        VE: "Venezuela",
        VN: "Vietnam",
        WF: "Wallis and Futuna",
        EH: "Western Sahara",
        YE: "Yemen",
        ZM: "Zambia",
        ZW: "Zimbabwe"
    };
    
    
    return (
        <productsContext.Provider value={{productsList, figItems, furnitureItems, setUserData, userData, user, countries, cart, setCart, fetchCartItem}}>
            { children }
        </productsContext.Provider>
    )
}

export { ProductsContext, productsContext }
