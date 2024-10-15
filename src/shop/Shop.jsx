import React, { useRef } from 'react'
import Hero from './Hero'
import ProductCard from './ProductCard'

function Shop() {

    const productSection = useRef(null);

    return (
        <>  
            <Hero scrollToProducts={productSection} />
            <ProductCard sectionRef={productSection} />
        </>
    )
}

export default Shop
