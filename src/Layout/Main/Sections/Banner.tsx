import React from "react";
import banner1 from "../../../Images/Banner/banner-1.png";
import banner2 from "../../../Images/Banner/banner-2.png";
import banner3 from "../../../Images/Banner/banner-3.png";

const Banner = () => {
  return (
    <div className="bg-gray-50">
      <div className="container-x mx-auto pt-8">
        <div className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="test md:col-span-1 lg:col-span-2 flex flex-col h-full">
            <img className="w-full h-full" src={banner1} alt="banner1" />
          </div>
          <div className="test col-span-1 flex flex-col h-full gap-y-8">
            <img className="w-full h-full" src={banner2} alt="banner2" />
            <img className="w-full h-full" src={banner3} alt="banner3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
