import React from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const SellingProduct = () => {
  return (
    <section className="mt-12">
      <div className="container-x mx-auto">
        <div className="selling flex justify-between">
          <h2 className="text-2xl font-bold">Top Selling Products</h2>
          <Link to="/">
            <span className="flex font-bold">
              ViewMore <ArrowRightIcon className="h-6 w-6" />
            </span>
          </Link>
        </div>
        <div className="gird gap-8 grid-cols-6">
          <div className="selling-card bg-red-900 col-span-3">
            <div className="selling-content w-1/2">Half</div>
            <div className="selling-content w-1/2">Half</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellingProduct;
