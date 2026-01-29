import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div>
     
      <div className='flex justify-center p-3 p-[1rem] gap-[2rem] text-gray-500/80'>
        <button><FaInstagramSquare size={25}/></button>
        <button><FaTwitter size={25}/></button>
        <button><FaFacebookF size={25}/></button>
      </div>
    </div>
  )
}

export default Footer
