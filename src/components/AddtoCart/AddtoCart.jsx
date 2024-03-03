import React from "react";

import { useSelector, useDispatch } from "react-redux";

import CartProductCard from "../Card/CartProductCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const notify = (value, isRight) => {
  if (isRight) {
    toast.success(value, {
      position: "top-right", // Change position to top-right
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "dark",
    });
  } else {
    toast.error(value, {
      position: "top-right", // Change position to top-right
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "dark",
    });
  }
};
function AddtoCart() {
  const CartItems = useSelector((state) => state.CartItems);
  const Total = useSelector((state) => state.TotalCartPrice);

  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white relative ">
        <div className="container py-[100px]   flex flex-col gap-6 overflow-x-auto mt-[100px] ">
          {CartItems.map((value) => (
            <CartProductCard
              value={value}
              notifyMethod={notify}
              key={value.id}
            />
          ))}
          {/* <CartProductCart value={CartItems[0]} /> */}
        </div>
        {Total ? (
          <div className=" h-[300px] w-[350px]  bg-secondary rounded-md p-2 flex flex-col justify-center items-start     gap-4  duration-500 mx-auto ">
            <div className="w-[90%] text-[20px] flex flex-col gap-3 justify-center">
              <p className="text-[30px] font-bold">Cart summary</p>
              <div className="flex justify-between font-semibold text-gray-600 ">
                <p>Total Product: </p>
                <p>{CartItems.length}</p>
              </div>
              <div className="flex justify-between font-semibold text-gray-600 ">
                <p>Delivery: </p>
                <p>Rs. 123</p>
              </div>
              <div className="flex justify-between font-semibold text-gray-600 ">
                <p>Tax: </p>
                <p>5%</p>
              </div>
              <div className="flex justify-between font-semibold text-gray-600 ">
                <p>Get Discount: </p>
                <p>Rs. 25</p>
              </div>
              <div className="border-t border-black"></div>
              <div className="flex justify-between font-semibold text-black ">
                <p>Total amount: </p>
                <p>Rs. {Total}</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <ToastContainer pauseOnFocusLoss={false} />;
    </>
  );
}

export default AddtoCart;
