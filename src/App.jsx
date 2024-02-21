import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import Product from './Pages/Product'

// import Sidebar from './components/Sidebar'
// import Footer from './components/Footer'
import Navbar from './components/Navbar';



const App = () => {
  return (
    <BrowserRouter>
    <Navbar  button={['button']} />
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Product/:id' element={<Product/>}/>
    </Routes>
    {/* <Sidebar/> */}
    {/* <Footer/> */}


    </BrowserRouter>
  )
}

export default App