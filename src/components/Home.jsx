import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import "./Home.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";


function Home() {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    axios
      .get(`/products.json`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const todayOffer = products.filter((item) => item.todayOffer === true);

  const navigate = useNavigate();

  

const goTo = (path) => navigate(path);

  return (
    <>
      <Navbar setInputValue={setInputValue} inputValue={inputValue} />

      <div className="bg-white ">
        <Carousel />
        <div className="grid grid-cols-2 gap-1.5 p-2 mt-[-1rem] relative bg-neutral-950 backdrop-blur-xs p-6  [border-radius:0rem_0rem_0rem_30rem]   ">
          
          <button
            onClick={()=>goTo('/shirts')}
            className=" [border-radius:20px_0px_0px_0px] h-[110px] sansation-light  flex justify-center items-center bg-gray-800 text-white font-semibold text-xl shadow-md shadow-black  active:scale-95 transition-transform duration-200"
          >
            <p className="">Shirts</p>
          </button>

          <button
            onClick={()=>goTo('/pants')}
            className=" [border-radius:0px_20px_0px_0px] h-[110px]  sansation-light flex justify-center items-center bg-gray-800 text-white font-semibold text-xl shadow-md shadow-black active:scale-95 transition-transform duration-200"
          >
            <p className="text-center">pants</p>
          </button>
          <button
            onClick={()=>goTo('/accessories')}
            className="[border-radius:0px_0px_0px_10px] h-[110px] sansation-light   flex justify-center items-center bg-gray-900 text-white font-semibold text-xl shadow-md shadow-black active:scale-95 transition-transform duration-200 "
          >
            <p className="text-center">Accessories</p>
          </button>
          <button className=" h-[110px] sansation-light [border-radius:0px_0px_10px_0px]  flex justify-center items-center bg-gray-900 text-white font-semibold text-xl shadow-md shadow-black active:scale-95 transition-transform duration-200 ">
            <p className="text-center">FootWear</p>
          </button>
          
        </div>
        

        <div className=" m-3 mt-8 rounded-xl p-3 bg-white shadow-sm shadow-black/50 relative">
          <h2 className="text-3xl font-bold text-red-800 bg-white absolute top-[-19px] left-[25px] w-[190px]  sansation-light ">
            Today's Offer
          </h2>
          <div className="flex overflow-x-auto   items-center  gap-5 pt-5">
            {todayOffer.map((val) => (
              <div
                key={val.id}
                className="sansation-light  shrink-0   flex flex-col items-center justify-center border   border-gray-800/30 rounded-lg p-3  "
              >
                <img
                  src={val.image}
                  alt=""
                  className=" h-[15rem]  object-contain  bg-red-500/20 w-[12rem]  [border-radius:10px_10px_0px_0px] p-2  mask-b-from-80% mask-b-to-100%  "
                />
                <div className="flex flex-col items-center ">
                  <p className=" text-center pb-2">{val.name}</p>
                  <div className="grid grid-cols-2 justify-center items-center border-3 border-black rounded-md w-40 overflow-hidden relative z-5 ">
                    <p className="text-gray-500 line-through text-center ">
                      {" "}
                      ₹{val.price}
                    </p>
                    <div className="col-start-2 col-end-3 row-start-1 row-end-3  bg-black h-full ">
                      <p className=" text-2xl text-white p-2  font-semibold  text-center  ">
                        {val.discount}%
                      </p>
                    </div>
                    <p className="text-center text-xl font-bold">
                      ₹{Math.round(val.price * (1 - val.discount / 100))}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <div
            onClick={()=>goTo('/premium-sale')}
            className="p-2 pb-0 pt-0 relative active:scale-95 transition-transform duration-600 "
          >
            <img
              src="/Products-images/premium-sales-bg-img.png"
              alt=""
              className=" rounded-xl h-[15rem] w-full object-cover"
            />
            <div className="absolute top-0">
              <p className=" cinzel-decorative-regular text- p-6 text-neutral-500 pb-0 pt-18 text-3xl ">
                Premium Sale
              </p>
              <p className="cinzel-decorative-regular text-white  pt-1 text-2xl  text-center ">
                Up to 50% off
              </p>
            </div>
          </div>

          <div
            onClick={()=>goTo('/best-offers')}
            className="p-2 pb-0 relative active:scale-95 transition-transform duration-600 "
          >
            <img
              src="/Products-images/best-offer-bg-img.png"
              alt=""
              className=" bg-black rounded-xl h-[15rem] w-full object-cover "
            />
            <p className="cinzel-decorative-regular text-4xl text-neutral-400 pl-8 pt-18 absolute top-0 text-center">
              Best <br />
              OfferS
            </p>
          </div>

          <div
            onClick={goTo}
            className="p-2 relative active:scale-95 transition-transform duration-600 "
          >
            <img
              src="/Products-images/wedding-bg-img.png"
              alt=""
              className=" bg-black rounded-xl h-[16.5rem] w-full object-cover "
            />
            <p className=" cinzel-decorative-regular text-3xl text-neutral-400 pl-4 pt-25 absolute top-0 text-center tracking-tight">
              Wedding
              <br />
              CollectionS
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
