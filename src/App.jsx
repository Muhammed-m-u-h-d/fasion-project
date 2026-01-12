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
        <Route path="/shirts" element={<Shirts/>}/>
        <Route path="/pants" element={<Phants/>}/>
        <Route path="/accessories" element={<Accessories/>}/>
        <Route path="/premium-sale" element={<Premium/>}/>
        <Route path="/best-offer" element={<BestOffer/>}/>
        <Route path="/wedding-collection" element={<Wedding/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

