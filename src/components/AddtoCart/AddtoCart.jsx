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
      <div className="dark:bg-gray-900 dark:text-white ">
        <div className="container py-[100px] border dark:border-white  flex flex-col gap-6 overflow-x-auto ">
          {CartItems.map((value) => (
            <CartProductCard
              value={value}
              notifyMethod={notify}
              key={value.id}
            />
          ))}
          {/* <CartProductCart value={CartItems[0]} /> */}
          <p>{Total ? Total : ""}</p>
        </div>
      </div>
      <ToastContainer pauseOnFocusLoss={false} />;
    </>
  );
}

export default AddtoCart;
