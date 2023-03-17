import React from "react";
import { Link } from "react-router-dom";
import brand1 from "../../../Images/seller/saller-1.png";
import brand2 from "../../../Images/seller/saller-2.png";
import brand3 from "../../../Images/seller/saller-3.png";
import brand4 from "../../../Images/seller/saller-4.png";
import brand5 from "../../../Images/seller/saller-5.png";
import brand6 from "../../../Images/seller/saller-6.png";
import add1 from "../../../Images/seller/ads-1.png";
import add2 from "../../../Images/seller/ads-2.png";
import SectionHeading from "../../../Components/SectionHeading";

const BestSeller = () => {
  return (
    <section className="mt-14">
      <div className="container-x mx-auto">
        <SectionHeading title="Best Seller" />
        <div className="grid grid-cols-6">
          <div className="seller-box text-center mx-auto">
            <div className="seller-brand lg:w-36 md:w-10 md:h-20 lg:h-36 w-14 h-14  rounded-full bg-white flex justify-center items-center">
              <img src={brand1} alt="seller1" />
            </div>
            <p className="font-medium">Shopno BD</p>
          </div>

          <div className="seller-box text-center mx-auto">
            <div className="seller-brand lg:w-36 md:w-20  lg:h-36 md:h-20 w-14 h-14 rounded-full bg-white flex justify-center items-center">
              <img src={brand2} alt="seller2" />
            </div>
            <p className="font-medium">Eecoms Shop</p>
          </div>

          <div className="seller-box text-center mx-auto">
            <div className="seller-brand lg:w-36 md:w-20  lg:h-36 md:h-20 w-14 h-14 rounded-full bg-white flex justify-center items-center">
              <img src={brand3} alt="seller3" />
            </div>
            <p className="font-medium">Fusion X</p>
          </div>

          <div className="seller-box text-center mx-auto">
            <div className="seller-brand lg:w-36 md:w-20  lg:h-36 md:h-20 w-14 h-14 rounded-full bg-white flex justify-center items-center">
              <img src={brand4} alt="seller4" />
            </div>
            <p className="font-medium">Rikayi Rox</p>
          </div>

          <div className="seller-box text-center mx-auto">
            <div className="seller-brand lg:w-36 md:w-20  lg:h-36 md:h-20 w-14 h-14 rounded-full bg-white flex justify-center items-center">
              <img src={brand5} alt="seller5" />
            </div>
            <p className="font-medium">Habbriyi</p>
          </div>

          <div className="seller-box text-center mx-auto">
            <div className="seller-brand lg:w-36 md:w-20  lg:h-36 md:h-20 w-14 h-14 rounded-full bg-white flex justify-center items-center">
              <img src={brand6} alt="seller6" />
            </div>
            <p className="font-medium">Rayhans</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2  mt-10">
          <div className="ads">
            <Link to="/">
              <img className="w-full" src={add1} alt="add1" />
            </Link>
          </div>
          <div className="ads">
            <Link to="/">
              <img className="w-full" src={add2} alt="add2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
