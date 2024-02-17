import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Layout from "./Layout.jsx";
import Clothes from "./components/Clothes/Clothes.jsx";
import Electronics from "./components/Electronics/Electronics.jsx";
import ProductDetails from "./components/ProuductDetail/ProductDetails.jsx";
import Addtocart from "./components/AddtoCart/AddtoCart.jsx";
import { Provider } from "react-redux";
import { store } from "./components/app/store.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/clothes",
        element: <Clothes />,
      },
      {
        path: "/Electronics",
        element: <Electronics />,
      },
      {
        path: "/shop/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart/",
        element: <Addtocart />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
