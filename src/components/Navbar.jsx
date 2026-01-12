import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { GrFavorite } from "react-icons/gr";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RiSearch2Line } from "react-icons/ri";


import { Link } from "react-router-dom";
function Navbar({ setInputValue, inputValue }) {
  const [menu,setMenu]=useState(false)
  
  return (
    <div className="bg-black/50  backdrop-blur-xs fixed top-0 w-full shadow-md shadow-black z-100 ">
      <div className="flex items-center justify-between p-2 pt-3 text-white pb-5">
        <div>
        <button onClick={()=>setMenu(!menu)}>
          <RiMenu2Line size={30} />
          </button>
        
          <div className={`${menu ? 'menu-slide' : 'menu-slide-out'} bg-neutral-900/80  backdrop-blur-xl  text-start text-white absolute left-[-.1rem] sansation-light p-3 pl-4 z-30 w-40 flex flex-col gap-2 `}>
      <Link to="/home" className='text-lg'>Home</Link>
      <p className='text-lg'>Shop</p>
      <p className='text-lg'>Account</p>
       <p className='text-lg'>Contact Us</p>
        <p className='text-lg'>About</p>
        <Link to="/" className='text-lg'>Login/Sign in</Link>
    </div>
        
    
        
        </div>
       
        <h1 className="text-5xl  relative top-3 left-3 font-bold sansation-light  ">
          Rétro<span className="text-gray-500/80">X</span>
        </h1>
        <div className="flex items-center  gap-4">
          <button>
            <GrFavorite size={30} />
          </button>
          <button>
            <LiaShoppingBagSolid size={30} />
          </button>
        </div>
      </div>
      <form
        action=""
        className="text-white p-2 pb-3 pt-5 flex items-center ml-[-1.7rem]"
      >
        <RiSearch2Line size={32} className="relative left-9.5 sansation-light " />
        <input
          type="text"
          placeholder="Search men’s fashion"
          onChange={(e) => setInputValue(e.target.value)}
          className="border p-3  pl-12 w-full text-lg rounded-   outline-none sansation-light"
        />
      </form>
      {inputValue === "" ? null : (
        <div className="border border-gray-300 m-2 mt-[-1rem] border-t-0 p-2 pt-5 [border-radius:0px_0px_10px_10px]">
          <div className="text-white w-[20rem] break-all flex items-center  gap-2">
            <RiSearch2Line size={30} className="text-gray-500 text-xl" />
           <p className="text-xl">{inputValue}</p> 
          </div>{" "}
        </div>
      )}
    </div>
  );
}

export default Navbar;
