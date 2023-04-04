import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "./Sections/Footer";

const Main = () => {
  // This is Whole Page Main

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
