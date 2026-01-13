import React from 'react'
import { useState } from 'react';
function Footer() {
const [inputValue,setInputValue]=useState("")
  return (
    <footer className="bg-[#0b0f14] text-gray-300 ">
      
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        
        <div>
            <h1 className=" text-5xl text-white  pb-2  ">
        Rétro<span className="text-gray-500/80">X</span>
      </h1>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Premium menswear crafted for modern elegance and timeless style.
          </p>
        </div>

        
        <div>
          <h4 className="text-white tracking-wider mb-4 text-sm uppercase">
            Explore
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition cursor-pointer">
              Premium Collection
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Best Sellers
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Offers
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Wedding Collection
            </li>
          </ul>
        </div>


        
        <div>
          <h4 className="text-white tracking-wider mb-4 text-sm uppercase">
            Support
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition cursor-pointer">
              Contact Us
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Return Policy
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>
      </div>
      

    
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-2">
          <p>© 2026 LoomX. All rights reserved.</p>
          <span className="tracking-wide">
            Crafted for modern men.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
