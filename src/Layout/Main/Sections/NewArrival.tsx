import React from "react";
import Card from "../../../Components/Card";
import SectionHeading from "../../../Components/SectionHeading";
import ads from "../../../Images/ads-4.png";
import { Link } from "react-router-dom";

const NewArrival = () => {
  return (
    <section className="mt-16">
      <div className="container-x mx-auto">
        <SectionHeading title="New Arrival" />
        <div className="grid grid-cols-4 gap-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="ads mt-8">
          <Link to="/">
            <img className="w-full" src={ads} alt="adds" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
