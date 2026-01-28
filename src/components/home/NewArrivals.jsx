import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { img } from 'framer-motion/client'

function NewArrivals() {
    const [products,setProducts]=useState([])
   
    useEffect(()=>{
        axios.get(`/products.json`)
        .then((res)=>{
            setProducts(res.data)
        })
        .catch((error)=>console.log(error))
    },[])

   
  return (
    <div className='m-3 sansation-light'>
    <h1 className='cormorant-garamond text-4xl pb-5'>New Arrivals</h1>
    <div className='grid grid-cols-2 gap-3'>
      {products.slice(-4).map((val)=>(
        <div key={val.id} className='text-center border border-gray-300 rounded-sm'>
          <img src={val.image} alt="" className='w-full bg-gray-200' />
          <div className='p-2 pt-0'>
          <p className='line-clamp-1'>{val.name}</p>
          <p className='text-lg font-semibold'>₹{val.price}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default NewArrivals
