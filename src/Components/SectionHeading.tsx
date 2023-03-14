import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

interface Title {
  title: string;
}

const SectionHeading = ({ title }: Title) => {
  return (
    <>
      <div className="section-heading flex items-center justify-between pb-5">
        <div className="section-text">
          <h2 className="font-bold text-2xl">{title}</h2>
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
    </>
  );
};

export default SectionHeading;
