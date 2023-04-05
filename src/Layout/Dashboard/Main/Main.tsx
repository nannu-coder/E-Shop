import React from "react";
import { Outlet } from "react-router-dom";

// This Is Dashboard Main

const Main = () => {
  return (
    <div className="mx-6">
      <div className="main-head bg-white shadow-lg max-w-full w-full py-4 px-5 rounded-lg">
        <div className="header-content flex justify-between">
          <div className="title">
            <h2 className="">Dashboard is here</h2>
          </div>
          <div className="icons">logout user</div>
        </div>
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
