import React from "react";
import {
  StarIcon,
  ShoppingBagIcon,
  ArrowPathIcon,
  HeartIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as FillStar } from "@heroicons/react/24/solid";
import card1 from "../Images/Card/product-img-1.jpg";

const Card = () => {
  return (
    <>
      <div className="pb-5">
        <div className="card-box group bg-white flex flex-col justify-center w-full items-center px-6 relative overflow-hidden">
          <div className="card-img pb-14 pt-8">
            <img src={card1} alt="card1" />
          </div>
          <div className="card-body">
            <div className="ratings flex">
              <FillStar className="h-4 w-4 text-yellow-300" />
              <FillStar className="h-4 w-4 text-yellow-300" />
              <FillStar className="h-4 w-4 text-yellow-300" />
              <StarIcon className="h-4 w-4 text-yellow-300" />
            </div>
            <div className="title py-3">
              <h2 className="font-medium">
                Xoggle aute et pariatur adipisicing nostrud et excepteur
              </h2>
            </div>
            <div className="price flex">
              <h3 className="line-through font-bold text-gray-400">
                $<span>27.73</span>
              </h3>
              <h3 className="ml-4 font-bold text-red-500 pb-5">
                $<span>18.73</span>
              </h3>
            </div>
          </div>

          <div className="overlay">
            <div className="overlay-content w-full  absolute invisible  -bottom-10 transition-all ease-in-out duration-300  group-hover:bottom-5 group-hover:visible  left-0">
              <button className="flex items-center bg-yellow-300 px-9 py-2 mx-auto">
                <ShoppingBagIcon className="h-6 w-6 mr-2" />
                <span className="break-normal">Add to Cart</span>
              </button>
            </div>
            <div className="site-icons flex flex-col absolute top-1/3 -right-10 invisible group-hover:visible group-hover:right-5 transition-all duration-300 ease-in-out">
              <button className="bg-gray-200 p-1 rounded mb-2">
                <ArrowsPointingOutIcon className="h-6 w-6" />
              </button>
              <button className="bg-gray-200 p-1 rounded mb-2">
                <HeartIcon className="h-6 w-6" />
              </button>
              <button className="bg-gray-200 p-1 rounded mb-2">
                <ArrowPathIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
