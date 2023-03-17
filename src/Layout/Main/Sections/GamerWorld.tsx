import React from "react";
import Card from "../../../Components/Card";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const GamerWorld = () => {
  return (
    <div className="bg-gray-50 pt-14">
      <div className="container-x mx-auto">
        <div className="section-heading flex items-center justify-between pb-5">
          <div className="section-text">
            <h2 className="font-bold text-2xl">Gamer World</h2>
          </div>
          <div className="more">
            <Link to="/viewmore" className="flex items-center">
              <h6 className="font-bold">View More</h6>
              <span>
                <ArrowSmallRightIcon className="h-5 w-5 ml-2 " />
              </span>
            </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default GamerWorld;
