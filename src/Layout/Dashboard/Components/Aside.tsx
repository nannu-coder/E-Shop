import React from "react";
import { FaUser, FaHome, FaShoppingBag } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    id: 0,
    path: "/dashboard/",
    text: "Dashboard",
    icon: <AiFillDashboard className="h-4 w-4" />,
  },
  {
    id: 1,
    path: "/",
    text: "Home",
    icon: <FaHome className="h-4 w-4" />,
  },
  {
    id: 2,
    path: "/dashboard/profile",
    text: "Profile",
    icon: <FaUser className="h-4 w-4" />,
  },
  {
    id: 3,
    path: "/dashboard/addproduct",
    text: "Add Product",
    icon: <FaShoppingBag className="h-4 w-4" />,
  },
];

const Aside = () => {
  return (
    <div className="mx-4 my-3 flex justify-center flex-col">
      <div className="header h-14 text-center">
        <h2 className="font-bold text-xl">Dashboard</h2>
      </div>
      <div className="content max-h-screen overflow-auto">
        {navLinks.map((nav) => (
          <NavLink
            key={nav.id}
            to={nav.path}
            className={({ isActive }) =>
              isActive
                ? "active bg-blue-500 px-3 py-3 rounded-lg mb-2 block text-white"
                : "block px-3 py-3 rounded-lg mb-2"
            }
          >
            <div className="content flex items-center">
              <span className="mr-3">{nav.icon}</span>
              {nav.text}
            </div>
          </NavLink>
        ))}
        {/* <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "active bg-blue-400/25"
              : "block px-3 py-3 rounded-lg mb-2 bg-gray-300"
          }
        >
          <div className="content flex items-center">
            <span className="mr-3">
              <FaUser className="h-4 w-4" />
            </span>
            Home
          </div>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "active bg-blue-400/25"
              : "block px-3 py-3 rounded-lg mb-2 bg-gray-300"
          }
        >
          <div className="content flex items-center">
            <span className="mr-3">
              <FaUser className="h-4 w-4" />
            </span>
            Home
          </div>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "active bg-blue-400/25"
              : "block px-3 py-3 rounded-lg mb-2 bg-gray-300"
          }
        >
          <div className="content flex items-center">
            <span className="mr-3">
              <FaUser className="h-4 w-4" />
            </span>
            Home
          </div>
        </NavLink> */}
      </div>
    </div>
  );
};

export default Aside;
