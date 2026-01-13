import  { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { GrFavorite } from "react-icons/gr";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RiSearch2Line } from "react-icons/ri";


import { Link } from "react-router-dom";
import { div } from "motion/react-client";
function Navbar({ setInputValue, inputValue }) {
  const [menu,setMenu]=useState(false)
  
  return (
   <div className="text-white bg-red-500   fixed top-0 z-50 w-full shadow-xl">

    <div className="flex justify-between p-4  sansation-light">
    <RiMenu2Line size={30}/>
    <div>
         <h1 className=" text-5xl text-white  ">
        Rétro<span className="text-gray-500/80">X</span>
      </h1>
     
    </div>
    <div className="flex gap-3"> 
    <GrFavorite size={30}/>
    <LiaShoppingBagSolid size={30}/>
    </div>
    </div>

    <form action="" className="flex items-center  p-4  sansation-light">
      <RiSearch2Line size={30} className="relative left-4"/>
      <input type="text" placeholder="Search fasions" className="border p-3 pl-13 w-full ml-[-1.6rem] text-lg "/>
    </form>

   </div>
        
  )
}

export default Navbar;
