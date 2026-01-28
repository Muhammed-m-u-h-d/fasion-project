import React, { useEffect, useState } from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import axios from 'axios';
import { motion, useAnimation } from "framer-motion";

function FeaturedLooks() {
    const [products,setProducts]=useState([])
   
    useEffect(()=>{
        axios.get(`/products.json`)
        .then((res)=>{
            setProducts(res.data)
        })
        .catch((error)=>console.log(error))
    },[])
    
    const essentials = products.filter((val)=>val.essential === true)


  return (
    <div className='grid grid-cols-2 gap-[1rem] pt-[2rem] pb-[2rem] border-b-1 border-gray-300 p-4 sansation-light'>
      <div>
        <img src="public/homepage/featured-banner.png" alt="" className='w-full h-full object-cover' />
      </div>
      <div className=''>
        <h2 className='cormorant-garamond font-bold text-3xl' >Featured Look</h2>
        <p className='text-gray-500 mt-2 text-lg'>Clean minimal Street Fit For everyday wear</p>
        <button className='border border-gray-500 rounded-sm bg-white mt-3 p-3 w-35 text-lg font-bold flex items-center gap-3 justify-center active:scale-95 transition-all active:bg-gray-300/50'>
            <p>View Fit</p>
            <MdArrowForwardIos/>
        </button>
        <div className='flex gap-3 overflow-x-auto mt-[2rem]'>
            {
                essentials.map((val)=>(
                    
                    <div key={val.id} className='shrink-0 text-center'>
                        <img src={val.image} alt="" className='h-30 bg-gray-200 rounded-xl' />
                        <p className='line-clamp-1 w-30'>{val.name}</p>
                        <p className='text-lg font-semibold'>₹{val.price}</p>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default FeaturedLooks
