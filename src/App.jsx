import './App.css'
import Home from './Home/Home'
import { ProductsContext } from './ProductsContext'
import Login from './authenticate/Login'
import Signup from './authenticate/Signup'
import Shop from './shop/Shop'
import Contact from './contact/Contact'
import AddProducts from './Admin/AddProducts'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SpecificProduct from './shop/SpecificProduct'
import Error404 from './Error404'
import Profile from './profile/Profile'
import Checkout from './shop/Checkout'

function App() {

  return (
    <ProductsContext>
      <BrowserRouter>
          <Routes>
          <Route exact path={'/'} element={<Home />} />
          <Route exact path='/shop' element={<Shop />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/add-products' element={<AddProducts />} />
          <Route exact path='/shop/product/:id' element={<SpecificProduct />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/checkout/:id' element={<Checkout />} />
          <Route  path='*' element={<Error404 />} />
          {/* <Route exact path='' element={} /> */}
          </Routes>
      </BrowserRouter>
    </ProductsContext>  
  )
}

export default App
