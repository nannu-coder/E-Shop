import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard/Dashboard/Dashboard";
import AddProduct from "../Layout/Dashboard/Pages/AddProduct";
import DashboardHome from "../Layout/Dashboard/Pages/DashboardHome";
import Profile from "../Layout/Dashboard/Pages/Profile";
import Main from "../Layout/Main/Main";
import Error from "../Pages/Error";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "addproduct",
        element: <AddProduct />,
      },
    ],
  },
]);

export default router;
