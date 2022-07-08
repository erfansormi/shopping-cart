import React from 'react'

import { Route, Routes, Navigate } from 'react-router-dom'

//components
import Allroducts from './components/products/AllProducts'
import ProductDetails from './components/products/ProductDetails'
import Nav from './components/Nav/Nav'
import Cart from "./components/Cart/Cart"
import Signup from './components/form/Signup'
import Home from './components/Home/Home'
import User from './components/user/User'

//context
import ProductsContext from './Context/ProductsContextProvider'
import CartContext from './Context/CartContextProvider'
import SignupProvider from './Context/SignupProvider'

const App = () => {
  return (
    <SignupProvider>
      <ProductsContext>
        <CartContext>
          <Routes>
            <Route
              path="*"
              element={<Navigate to="/Home" replace />}
            />
            <Route path='/Home' element={<Home />} />
            <Route path='/Products' element={<Allroducts />} />
            <Route path='/Products/Product:id' element={<ProductDetails />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/User-info' element={<User />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </CartContext>
      </ProductsContext>
    </SignupProvider>
  )
}

export default App