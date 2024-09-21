import './App.css'
import Home from './Home/Home'
import { ProductsContext } from './ProductsContext'
import Login from './authenticate/Login'
import Signup from './authenticate/Signup'
import Shop from './shop/Shop'
import Contact from './contact/Contact'

function App() {

  return (
    <>
      <ProductsContext>
        <Home />
        <Shop />
        <Signup />
        <Login />
        <Contact />
      </ProductsContext>
    </>
  )
}

export default App
