import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <div className="mx-4 my-3 flex justify-center flex-col">
      <div className="header h-14">
        <h2>Dashboard</h2>
      </div>
      <div className="content max-h-screen overflow-auto">
        <Link className="bg-white block px-3 py-3 rounded-xl mb-2" to="/">
          Home
        </Link>
        <Link className="bg-white block p-2 rounded-xl mb-3" to="/">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Aside;
