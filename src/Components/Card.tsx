import React from "react";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as FillStar } from "@heroicons/react/24/solid";
import card1 from "../Images/Card/product-img-1.jpg";

const Card = () => {
  return (
    <>
      <div className="grid grid-cols-4 pb-5">
        <div className="card-box bg-white flex flex-col justify-center w-full items-center px-6 relative">
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

          <div className="overlay-content"></div>
        </div>
      </div>
    </>
  );
};

export default Card;
