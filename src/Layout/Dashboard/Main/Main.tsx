import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="mx-6">
      <div className="main-head bg-white shadow-lg max-w-full w-full py-4 px-5 rounded-lg">
        <div className="header-content flex justify-between">
          <div className="title">
            <h2 className="">Dashboard</h2>
          </div>
          <div className="icons">logout</div>
        </div>
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
