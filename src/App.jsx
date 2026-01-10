import React from 'react'
import Loginpage from './components/Loginpage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Carousel from './components/Carousel';
import Shirts from './components/Shirts';
import Phants from './components/Phants';
import Accessories from './components/Accessories';
import Premium from './components/Premium';
import BestOffer from './components/BestOffer';
import Wedding from './components/Wedding';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Shirts" element={<Shirts/>}/>
        <Route path="/Pants" element={<Phants/>}/>
        <Route path="/Accessories" element={<Accessories/>}/>
        <Route path="/Premiumsale" element={<Premium/>}/>
        <Route path="/Bestoffer" element={<BestOffer/>}/>
        <Route path="/Weddingcollection" element={<Wedding/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

