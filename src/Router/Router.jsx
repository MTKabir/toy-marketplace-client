import * as React from "react";
import Layout from "../Layout/Layout";
import Home from "../Home/Home/Home";
import ViewDetails from "../Home/ViewDetails/ViewDetails";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";

import {
  createBrowserRouter,
} from "react-router-dom";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import AllToys from "../AllToys/AllToys";

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
      },
      {
        path:"/login",
        element: <Login></Login>

      },
      {
        path:"/registration",
        element:<Registration></Registration>
      },
      {
        path: "/alltoys",
        element : <AllToys></AllToys>
      }
    ]
  },
  {
    path:"/forgetpassword",
    element:<ForgetPassword></ForgetPassword>
  }
]);
export default router;