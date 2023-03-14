import React from "react";
import Card from "../../../Components/Card";
import SectionHeading from "../../../Components/SectionHeading";
import add from "../../../Images/seller/ads-3.png";
import { Link } from "react-router-dom";

const PopularSell = () => {
  return (
    <section className="mt-8">
      <div className="container-x mx-auto">
        <SectionHeading title="Popular Sell" />
        <div className="grid gap-4 grid-cols-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="adds mt-3">
          <Link to="/">
            <img className="w-full" src={add} alt="add" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularSell;
