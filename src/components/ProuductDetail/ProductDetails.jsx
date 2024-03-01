import React from "react";
import { useParams } from "react-router-dom";
import ProductsData from "../../Data/ProductData";
import { FaStar } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  addtoCart,
  addingCartcount,
  TotalPriceOfCart,
} from "../features/addtoCart/AddtoCartSlice";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => {
  toast.success("successfully added", {
    position: "top-left",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    theme: "dark",
  });
};
export default function ProductDetails() {
  const { id } = useParams();
  const CartItems = useSelector((state) => state.CartItems);
  const Product = ProductsData.find((item) => item.id == id);
  const dispatch = useDispatch();
  const images = Product.images;

  const AddtoCartMethod = () => {
    const isPresent = CartItems.find((item) => (item.id == id ? true : false));
    if (isPresent) {
      return;
    } else {
      notify();
      dispatch(addtoCart(Product));
      dispatch(addingCartcount());
      dispatch(TotalPriceOfCart());
    }
  };
  const screenWidth = window.innerWidth;
  const getThumbnailPosition = () => {
    if (screenWidth < 576) {
      return "bottom";
    } else {
      return "right";
    }
  };

  return (
    <div className="dark:bg-[#111827]">
      <div
        className="container md:p-[50px] p-[20px]   flex lg:flex-row flex-col
      md:gap-[50px] gap-[30px]"
      >
        {/* This is Image Section  */}
        <div className=" overflow-hidden     sm:h-[95%]  lg:w-2/3 w-full ">
          <ImageGallery
            items={images}
            showPlayButton={false}
            slideOnThumbnailOver={true}
            thumbnailPosition={getThumbnailPosition()}
            showNav={false}
          />
        </div>
        {/* This is contents Section  */}
        <div
          className="flex
        flex-col gap-4  lg:w-1/2   text-center items-center sm:text-left sm:items-start"
        >
          {/* this is title of product */}
          <h1 className="sm:text-[30px] text-[16px] font-bold dark:text-white">
            {Product.title}
          </h1>
          {/* This is rating Section */}
          <div className="flex items-center gap-4">
            <div
              className="flex gap-1
          "
            >
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
            </div>
            <p className="text-secondary">5459 rating</p>
          </div>
          {/* this is brand info */}
          <p className="text-gray-400">
            Brand: <span className="text-secondary">No brand</span>
          </p>
          {/* description of products are here */}
          <p className="sm:text-[16px] text-[13px] text-gray-500">
            {Product.description}
          </p>
          {/* price section is here */}
          <div>
            <p className="text-secondary sm:text-[30px] text-[15px]  font-semibold">{`Rs. ${Product.price} `}</p>
            <div
              className="flex
             gap-2 text-[14px] sm:text-[16px]"
            >
              <p className="text-gray-500 line-through text-[14px] ">
                Rs .2034
              </p>
              <p className="text-black dark:text-white">-10%</p>
            </div>
          </div>
          {/* here is the button for add to cart  */}
          <button
            className="bg-secondary sm:px-4  sm:py-2  rounded-[10px]  p-1 w-[100px] sm:w-[200px] text-white hover:bg-yellow-500"
            onClick={AddtoCartMethod}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-[20px] border-2 border-red-600">
        <ToastContainer />
      </div>
    </div>
  );
}
