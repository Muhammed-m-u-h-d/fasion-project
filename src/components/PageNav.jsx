import React from 'react'
import { BiSearch } from "react-icons/bi";
import { GrFavorite } from "react-icons/gr";
import { RiSearch2Line } from "react-icons/ri";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { GoFilter } from "react-icons/go";

function PageNav() {
  return (
    <div className='bg-black/50 p-6 pl-5 pr-5 text-white fixed top-0 w-full backdrop-blur-xs'>
      <form action="" className='flex items-center gap-3'>
       <GoFilter size={35} />
        <div className='flex gap-3 items-center relative'>
          <RiSearch2Line size={30} className='absolute left-3 top-3'/>
        <input type="text" placeholder='Search...' className='sansation-light border pl-14 p-3 w-full rounded-lg text-lg  outline-none'/>
        <button className=''><GrFavorite size={30}/></button>
         <button className=''><LiaShoppingBagSolid size={30}/></button>
        </div>
      </form>
    </div>
  )
}

export default PageNav
