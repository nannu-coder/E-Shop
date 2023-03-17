import React from "react";
import { Link } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import paymentGetway from "../../../Images/payment-getways.png";

const date = new Date();

const Footer = () => {
  return (
    <div className="footer bg-white">
      <div className="container-x mx-auto">
        <footer>
          <div className="logo-part text-center py-6">
            <h2 className="text-3xl font-bold">
              LO<span className="text-yellow-200">GO</span>
            </h2>
          </div>
          <hr />
          <div className="footer-content mt-5 mb-3">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 lg:justify-start md:justify-between gap-4">
              <div className="about md:col-span-2 lg:col-span-2">
                <h2 className="text-black font-bold text-lg">About Us</h2>
                <p className="text-lg text-gray-400 mt-4">
                  We know there are a lot of threa developers our but we pride
                  into a firm in the industry.
                </p>
              </div>
              <div className="feature md:col-span-2 lg:col-span-2 text-gray-400">
                <h2 className="text-black font-bold text-lg">Feature</h2>
                <ul>
                  <li className="mt-3">
                    <Link to="/">About Us</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/">Terms & Condition</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/">Best Products</Link>
                  </li>
                </ul>
              </div>
              <div className="general-links md:col-span-2 lg:col-span-1 text-gray-400">
                <h2 className="text-black font-bold text-lg">General Links</h2>
                <ul>
                  <li className="mt-3">
                    <Link to="/">Blog</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/">Tracking Order</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/">Become Seller</Link>
                  </li>
                </ul>
              </div>
              <div className="helpful md:col-span-2 lg:col-span-1 text-gray-400">
                <h2 className="text-black font-bold text-lg">Helpful</h2>
                <ul>
                  <li className="mt-3">
                    <Link to="/">Flash Sell</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/">FAQ</Link>
                  </li>
                  <li className="mt-3">
                    <Link to="/">Support</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="pt-2" />
          <div className="footer-bottom flex md:flex-row flex-col justify-between items-center py-4">
            <div className="bottom-content flex items-center">
              <Link to="/">
                <FiInstagram className="h-6 w-6 mr-3" />
              </Link>
              <Link to="/">
                <FaFacebookF className="h-6 w-6 mr-3" />
              </Link>
              <Link to="/">
                <FaYoutube className="h-6 w-6 mr-3" />
              </Link>
              <p className="ml-2">
                &copy; {date.getFullYear()} E-Shop All rights reserved
              </p>
            </div>
            <div className="botom-img mt-4 md:mt-0">
              <img src={paymentGetway} alt="Payment Getway" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
