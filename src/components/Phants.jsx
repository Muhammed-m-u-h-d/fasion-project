import { useState, useEffect } from "react";
import axios from "axios";
import PageNav from "./PageNav";
import Footer from "./Footer";


function Phants() {
     const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`/products.json`)
      .then((res) => {
        
           setProducts(res.data);
        
        
      })
      .catch((error) => console.log(error));
  }, []);

  const phants = products.filter((item) =>
    ["Pants"].includes(
      item.category
    )

  );
  console.log(products);
  return (
     <>
      <PageNav />
      <div className="mt-[6.5rem] p-2 bg-white">
        <div className="grid grid-cols-2  gap-3  overflow-auto ">
          {phants.map((val) => (
            <div
              key={val.id}
              className=" sansation-light border border-gray-300 h-full w-full   rounded-lg flex flex-col p-2 pb-0 "
            >
              
              <img
                src={val.image}
                alt=""
                className="h-[15rem] p-2 w-full object-contain bg-slate-100  rounded-lg"
              />
              
            <div className="p-2 ">
              <div className=" text-center font-bold pb-1 ">
                {val.name.length >= 15
                  ? val.name.slice(0, 12) + "..."
                  : val.name}
              </div>
              <div className="flex  items-center justify-center gap-3 flex-wrap ">
              <p className="text-xl font-bold text-center">
                ₹{Math.round(val.price * (1 - val.discount / 100))}
              </p>
              <p className=" font-semibold line-through text-gray-500 ">₹{val.price}</p>
              </div>
              <div  className="flex items-center justify-center gap-2 pt-1">
              <p className="text-xl font-bold text-green-900 text-start">{val.discount}%<span className="text-sm">Off</span></p>
            
               
              <p className="bg-gray-300/50 w-25  p-1 text-center text-sm rounded-sm ">{val.badge}</p>
               </div>
              </div>
            
            </div>
          ))}
        </div>
      </div>
  <Footer/>
    </>
  )
}

export default Phants
