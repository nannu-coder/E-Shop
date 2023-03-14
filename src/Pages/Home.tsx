import React from "react";
import SmallFeature from "../Components/SmallFeature";
import Banner from "../Layout/Main/Sections/Banner";
import BestSeller from "../Layout/Main/Sections/BestSeller";
import BrandShop from "../Layout/Main/Sections/BrandShop";
import GamerWorld from "../Layout/Main/Sections/GamerWorld";
import PopularSell from "../Layout/Main/Sections/PopularSell";
import SellingProduct from "../Layout/Main/Sections/SellingProduct";
import TimerApp from "../Layout/Main/Sections/TimerApp";

const Home = () => {
  return (
    <>
      <Banner />
      <SmallFeature />
      <GamerWorld />
      <BrandShop />
      <TimerApp />
      <SellingProduct />
      <BestSeller />
      <PopularSell />
    </>
  );
};

export default Home;
