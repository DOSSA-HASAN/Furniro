import './App.css'
import ExtraLinks from './Home/ExtraLinks'
import Hero from './Home/Hero'
import Partners from './Home/Partners'
import Section02 from './Home/Section02'
import Transformation from './Home/Transformation'
import { ProductsContext } from './ProductsContext'
import NavBar from './navbar/NavBar'
import Footer from './navbar/footer/Footer'

function App() {

  return (
    <>
      <ProductsContext>
        <NavBar />
        <Hero />
        <Section02 />
        <Partners />
        <Transformation />
        <ExtraLinks />
        <Footer />
      </ProductsContext>
    </>
  )
}

export default App
