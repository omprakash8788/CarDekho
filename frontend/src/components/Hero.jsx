import React from "react";
import car1 from "../assets/car5a.webp"

const Hero = () => {
  return (
    <div className="flex shadow-2xl flex-col sm:flex-row border border-gray-100 ">
      {/* left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#41411]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">Our Best Sellers</p>
          </div>
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed">Latest Arrivals</h1>
          <div className="flex items-center gap-2">
            <p className="font-medium text-sm md:text-base">Buy Now</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>

          </div>
        </div>
      </div>
      {/* right side */}
      <img className="w-full sm:h-1/2" src={car1} alt="" />
    </div>
  );
};

export default Hero;
