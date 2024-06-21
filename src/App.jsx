import React from 'react'
import Nav from './components/Nav/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Order from './Pages/Order/Order'

const App = () => {
  return (
    <div className='app'>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/order" element={<Order />} />
        </Routes>  
      </div>
  )
}

export default App