import * as React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home/Home";
import ViewDetails from "../Home/ViewDetails/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children :[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/viewdetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader:({params}) => fetch(`http://localhost:5000/viewdetails/${params.id}`)
      }
    ]
  }
]);
export default router;