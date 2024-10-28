import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import { CartProvider } from './CartContext'
import ProductList from './ProductList'
import Cart from './Cart'
import './App.css'

function App() {

  return (
    <div className="">
          <Header/>

          <CartProvider>
            <div className="container">
              <h1>Shopping Cart Example</h1>
              <ProductList />
              <Cart />
            </div>
          </CartProvider>
    </div>
  )
}

export default App
