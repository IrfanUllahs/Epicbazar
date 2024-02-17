import React from "react";

import { useSelector, useDispatch } from "react-redux";

import CartProductCard from "../Card/CartProductCard";
function AddtoCart() {
  const CartItems = useSelector((state) => state.CartItems);
  const Total = useSelector((state) => state.TotalCartPrice);

  return (
    <div className="dark:bg-gray-900 dark:text-white ">
      <div className="container py-[100px] border dark:border-white  flex flex-col gap-6 overflow-x-auto ">
        {CartItems.map((value) => (
          <CartProductCard value={value} key={value.id} />
        ))}
        {/* <CartProductCart value={CartItems[0]} /> */}
        <p>{Total ? Total : ""}</p>
      </div>
    </div>
  );
}

export default AddtoCart;
