import React from "react";
import SmallFeature from "../Components/SmallFeature";
import Banner from "../Layout/Main/Sections/Banner";
import BrandShop from "../Layout/Main/Sections/BrandShop";
import GamerWorld from "../Layout/Main/Sections/GamerWorld";

const Home = () => {
  return (
    <>
      <Banner />
      <SmallFeature />
      <GamerWorld />
      <BrandShop />
    </>
  );
};

export default Home;
