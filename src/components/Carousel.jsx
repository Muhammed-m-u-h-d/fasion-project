import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
function Carousel() {
  const [index, setIndex] = useState(0);
  const img = [
    "/Products-images/ads1.png",
    "/Products-images/ads2.png",
    "/Products-images/ads3.jpg",
  ];

  function next() {
    setIndex((prev) => (prev + 1) % img.length);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
  }, []);

  return (
    <div className="mt-[10.3rem] bg-black  ">
      <img
        src={img[index]}
        alt=""
        className=" h-full w-full   object-contain  mask-b-from-20% mask-b-to-100%"
      />
    </div>
  );
}

export default Carousel;
