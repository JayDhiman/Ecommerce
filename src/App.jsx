import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Product from './Pages/Product'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'



const App = () => {
  return (
    <BrowserRouter>
    <Header logo={logo} />
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Product/:productId' element={<Product/>}/>
    </Routes>
    <Sidebar/>
    <Footer/>


    </BrowserRouter>
  )
}

export default App