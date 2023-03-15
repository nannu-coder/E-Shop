import React from "react";
import brand1 from "../../../Images/Brand/brand-1.png";
import brand2 from "../../../Images/Brand/brand-2.png";
import brand3 from "../../../Images/Brand/brand-3.png";
import brand4 from "../../../Images/Brand/brand-4.png";
import brand5 from "../../../Images/Brand/brand-5.png";
import brand6 from "../../../Images/Brand/brand-6.png";
import brand7 from "../../../Images/Brand/brand-7.png";
import brand8 from "../../../Images/Brand/brand-8.png";
import brand9 from "../../../Images/Brand/brand-9.png";
import brand10 from "../../../Images/Brand/brand-10.png";
import brand11 from "../../../Images/Brand/brand-11.png";
import brand12 from "../../../Images/Brand/brand-12.png";

const BrandShop = () => {
  return (
    <div className="brand-section mt-10">
      <div className="container-x mx-auto">
        <div className="brand-heading mb-4">
          <h2 className="text-3xl font-bold">Shop by Brand</h2>
        </div>

        <div className="grid grid-cols-6">
          <div className="item">
            <div className="img bg-white flex border-2 border-gray-50 justify-center items-center h-[130px]">
              <img src={brand1} alt="brand" />
            </div>
          </div>
          <div className="item">
            <div className="img border-2 border-gray-50 bg-white flex justify-center items-center h-[130px] ">
              <img src={brand2} alt="brand" />
            </div>
          </div>
          <div className="item">
            <div className="img border-2 border-gray-50 bg-white flex justify-center items-center h-[130px]">
              <img src={brand3} alt="brand" />
            </div>
          </div>
          <div className="item">
            <div className="img border-2 bg-white flex justify-center items-center h-[130px] border-gray-50">
              <img src={brand4} alt="brand" />
            </div>
          </div>
          <div className="item">
            <div className="img bg-white flex justify-center items-center h-[130px] border-2 border-gray-50">
              <img src={brand5} alt="brand" />
            </div>
          </div>
          <div className="item">
            <div className="img bg-white flex justify-center items-center h-[130px] border-2 border-gray-50">
              <img src={brand6} alt="brand" />
            </div>
          </div>
          <div className="item">
            <div className="img bg-white flex justify-center items-center h-[130px] border-2 border-gray-50">
              <img src={brand7} alt="brand" />
            </div>
          </div>
          <div className="item">
            <div className="img bg-white flex justify-center items-center h-[130px] border-2 border-gray-50">
              <img src={brand8} alt="brand" />
            </div>
          </div>
          <div className="item">
            <div className="img bg-white flex justify-center items-center h-[130px] border-2 border-gray-50">
              <img src={brand9} alt="brand" />
            </div>
          </div>
          <div className="item">
            <div className="img bg-white flex justify-center items-center h-[130px] border-2 border-gray-50">
              <img src={brand10} alt="brand" />
            </div>
          </div>
          <div className="item">
            <div className="img bg-white flex justify-center items-center h-[130px] border-2 border-gray-50">
              <img src={brand11} alt="brand" />
            </div>
          </div>
          <div className="item">
            <div className="img bg-white flex justify-center items-center h-[130px] border-2 border-gray-50">
              <img src={brand12} alt="brand" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandShop;
