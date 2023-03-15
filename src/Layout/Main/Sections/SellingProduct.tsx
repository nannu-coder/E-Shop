import React from "react";
import product1 from "../../../Images/product-img-4.jpg";
import product2 from "../../../Images/product-img-5.jpg";
import product3 from "../../../Images/product-img-6.jpg";
import product4 from "../../../Images/product-img-7.jpg";
import { StarIcon } from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  HeartIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";
import SectionHeading from "../../../Components/SectionHeading";

const SellingProduct = () => {
  return (
    <section className="mt-14">
      <div className="container-x mx-auto">
        <SectionHeading title="Top Selling Products" />
        <div className="grid gap-8 grid-cols-6">
          <div className="selling-card bg-white col-span-3 mt-5 rounded-sm group">
            <div className="selling-content flex mx-auto p-4 relative overflow-hidden">
              <div className="img-part w-1/2">
                <img className="mx-auto" src={product1} alt="Product1" />
              </div>
              <div className="card-content w-1/2 ">
                <div className="rating-part flex ">
                  <StarIcon className="h-6 w-6 text-yellow-300" />
                  <StarIcon className="h-6 w-6 text-yellow-300" />
                  <StarIcon className="h-6 w-6 text-yellow-300" />
                  <StarIcon className="h-6 w-6 text-yellow-300" />
                  <StarIcon className="h-6 w-6 text-yellow-300" />
                </div>
                <h6 className="leading-6 font-normal mt-3">
                  Senmei ipsum dolore eiusmod dolor officia do nisi
                </h6>
                <div className="price flex mt-3">
                  <h3 className="font-bold text-gray-400 line-through">
                    $20.64
                  </h3>
                  <h3 className="ml-4 font-bold text-red-600">$27.61</h3>
                </div>
                <div className="card-btn">
                  <button className="cursor-pointer px-8 py-2 rounded-md mt-7 bg-yellow-400  text-white">
                    Add To Cart
                  </button>
                </div>
                <div className="overlay flex flex-col absolute top-1/3 -right-10 invisible group-hover:visible group-hover:right-5 transition-all duration-300 ease-in-out">
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
          <div className="selling-card bg-white col-span-3 mt-5 rounded-sm group">
            <div className="selling-content flex mx-auto p-4 relative overflow-hidden">
              <div className="img-part w-1/2">
                <img className="mx-auto" src={product2} alt="Product1" />
              </div>
              <div className="card-content w-1/2">
                <div className="rating-part flex ">
                  <StarIcon className="h-6 w-6 text-yellow-300" />
                  <StarIcon className="h-6 w-6 text-yellow-300" />
                  <StarIcon className="h-6 w-6 text-yellow-300" />
                  <StarIcon className="h-6 w-6 text-yellow-300" />
                  <StarIcon className="h-6 w-6 text-yellow-300" />
                </div>
                <h6 className="leading-6 font-normal mt-3">
                  Senmei ipsum dolore eiusmod dolor officia do nisi
                </h6>
                <div className="price flex mt-3">
                  <h3 className="font-bold text-gray-400 line-through">
                    $20.64
                  </h3>
                  <h3 className="ml-4 font-bold text-red-600">$27.61</h3>
                </div>
                <div className="card-btn">
                  <button className="cursor-pointer px-8 py-2 rounded-md mt-7 bg-yellow-400  text-white">
                    Add To Cart
                  </button>
                </div>
                <div className="overlay flex flex-col absolute top-1/3 -right-10 invisible group-hover:visible group-hover:right-5 transition-all duration-300 ease-in-out">
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

          <div className="selling-card bg-white col-span-3 rounded-sm group">
            <div className="selling-content flex mx-auto p-4 relative overflow-hidden">
              <div className="img-part w-1/2">
                <img className="mx-auto" src={product3} alt="Product1" />
              </div>
              <div className="card-content w-1/2">
                <div className="rating-part flex ">
                  <StarIcon className="h-6 w-6 text-yellow-300" />
                  <StarIcon className="h-6 w-6 text-yellow-300" />
                  <StarIcon className="h-6 w-6 text-yellow-300" />
                  <StarIcon className="h-6 w-6 text-yellow-300" />
                  <StarIcon className="h-6 w-6 text-yellow-300" />
                </div>
                <h6 className="leading-6 font-normal mt-3">
                  Senmei ipsum dolore eiusmod dolor officia do nisi
                </h6>
                <div className="price flex mt-3">
                  <h3 className="font-bold text-gray-400 line-through">
                    $20.64
                  </h3>
                  <h3 className="ml-4 font-bold text-red-600">$27.61</h3>
                </div>
                <div className="card-btn">
                  <button className="cursor-pointer px-8 py-2 rounded-md mt-7 bg-yellow-400  text-white">
                    Add To Cart
                  </button>
                </div>
                <div className="overlay flex flex-col absolute top-1/3 -right-10 invisible group-hover:visible group-hover:right-5 transition-all duration-300 ease-in-out">
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

          <div className="selling-card bg-white col-span-3 rounded-sm group">
            <div className="selling-content flex mx-auto p-4 relative overflow-hidden">
              <div className="img-part w-1/2">
                <img className="mx-auto" src={product4} alt="Product1" />
              </div>
              <div className="card-content w-1/2">
                <div className="rating-part flex ">
                  <StarIcon className="h-6 w-6 text-yellow-300" />
                  <StarIcon className="h-6 w-6 text-yellow-300" />
                  <StarIcon className="h-6 w-6 text-yellow-300" />
                  <StarIcon className="h-6 w-6 text-yellow-300" />
                  <StarIcon className="h-6 w-6 text-yellow-300" />
                </div>
                <h6 className="leading-6 font-normal mt-3">
                  Senmei ipsum dolore eiusmod dolor officia do nisi
                </h6>
                <div className="price flex mt-3">
                  <h3 className="font-bold text-gray-400 line-through">
                    $20.64
                  </h3>
                  <h3 className="ml-4 font-bold text-red-600">$27.61</h3>
                </div>
                <div className="card-btn">
                  <button className="cursor-pointer px-8 py-2 rounded-md mt-7 bg-yellow-400  text-white">
                    Add To Cart
                  </button>
                </div>
                <div className="overlay flex flex-col absolute top-1/3 -right-10 invisible group-hover:visible group-hover:right-5 transition-all duration-300 ease-in-out">
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
        </div>
      </div>
    </section>
  );
};

export default SellingProduct;
