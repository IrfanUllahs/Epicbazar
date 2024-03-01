import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react"; // Import Chakra UI provider

import "./index.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./components/app/store.js"; // Assuming store is defined in store.js

// Import your components
import Home from "./components/Home/Home.jsx";
import Layout from "./Layout.jsx";
import Clothes from "./components/Clothes/Clothes.jsx";
import Electronics from "./components/Electronics/Electronics.jsx";
import ProductDetails from "./components/ProuductDetail/ProductDetails.jsx";
import Addtocart from "./components/AddtoCart/AddtoCart.jsx";

import { extendTheme } from "@chakra-ui/react";
import SearchData from "./components/SearchPage/SearchData.jsx";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrap Layout around all child routes
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
        path: "/Electronics", // Corrected typo
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
      {
        path: "/search",
        element: <SearchData />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // Wrap entire app in ChakraProvider and configure store
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </ChakraProvider>
);
