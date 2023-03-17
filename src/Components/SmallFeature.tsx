import React from "react";
import {
  ShoppingCartIcon,
  ArrowPathRoundedSquareIcon,
  ShieldCheckIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

const SmallFeature = () => {
  return (
    <div className="bg-gray-50 pt-8">
      <div className="container-x mx-auto">
        <div className="card bg-white py-5 rounded-md">
          <div className="grid gap-2 lg:grid-cols-4">
            <div className="shipping flex items-center justify-evenly">
              <div className="icon">
                <ShoppingCartIcon className="h-10 w-10 text-red-400" />
              </div>
              <div className="text">
                <h6 className="font-bold">Free Shipping</h6>
                <p>When ordering over $100</p>
              </div>
            </div>
            <div className="return flex items-center justify-evenly">
              <div className="icon">
                <ArrowPathRoundedSquareIcon className="h-10 w-10 text-red-400" />
              </div>
              <div className="text">
                <h6 className="font-bold">Free Return</h6>
                <p>Get Return within 30 days</p>
              </div>
            </div>
            <div className="payment flex items-center justify-evenly">
              <div className="icon">
                <ShieldCheckIcon className="h-10 w-10 text-red-400" />
              </div>
              <div className="text">
                <h6 className="font-bold">Secure Payment</h6>
                <p>100% Secure Online Payment</p>
              </div>
            </div>
            <div className="quality flex items-center justify-evenly">
              <div className="icon">
                <TrophyIcon className="h-10 w-10 text-red-400" />
              </div>
              <div className="text">
                <h6 className="font-bold">Best Quality</h6>
                <p>Original Product Guarenteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallFeature;
