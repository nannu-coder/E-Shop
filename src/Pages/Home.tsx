import React from "react";
import SmallFeature from "../Components/SmallFeature";
import Banner from "../Layout/Main/Sections/Banner";
import BestSeller from "../Layout/Main/Sections/BestSeller";
import BrandShop from "../Layout/Main/Sections/BrandShop";
import GamerWorld from "../Layout/Main/Sections/GamerWorld";
import NewArrival from "../Layout/Main/Sections/NewArrival";
import PopularSales from "../Layout/Main/Sections/PopularSales";
import PopularSell from "../Layout/Main/Sections/PopularSell";
import SellingProduct from "../Layout/Main/Sections/SellingProduct";
import Subscription from "../Layout/Main/Sections/Subscription";
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
      <NewArrival />
      <PopularSales />
      <Subscription />
    </>
  );
};

export default Home;
