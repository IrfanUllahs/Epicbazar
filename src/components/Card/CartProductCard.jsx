import React from "react";
import { FaStar } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCartcount,
  removeFromCart,
  incrementItemNum,
  decrementItemNum,
  TotalPriceOfCart,
} from "../features/addtoCart/AddtoCartSlice";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function CartProductCard({ value, notifyMethod }) {
  const dispatch = useDispatch();
  const CartItems = useSelector((state) => state.CartItems);
  const itemqtyFind = () => {
    let item = CartItems.find((obj) => value.id == obj.id);
    let ItemQty = item.ItemNum;
    return ItemQty;
  };
  const removeItem = (id) => {
    notifyMethod("deleted product", false);

    dispatch(removeFromCart(id));
    dispatch(removeCartcount());
    dispatch(TotalPriceOfCart());
  };
  const IncreasingQty = (id) => {
    dispatch(incrementItemNum(id));
    dispatch(TotalPriceOfCart());
    if (itemqtyFind() < 4) {
      notifyMethod("item Qty increases", true);
    }
  };
  const DecreasingQty = (id) => {
    dispatch(decrementItemNum(id));
    dispatch(TotalPriceOfCart());
    if (itemqtyFind() > 1) {
      notifyMethod("item Qty decreases", false);
    }
  };

  return (
    <>
      <div className="flex flex-col xl:flex-row gap-[100px] xl:ml-[100px] relative group overflow-hidden ">
        <img src={value.images[0].original} className="w-[300px] h-[320px]" />

        <div>
          {/* this is title of product */}
          <h1 className="text-[30px] font-bold dark:text-white">
            {value.title}
          </h1>
          {/* This is rating Section */}
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
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
          <p className="text-[16px] text-gray-500">{value.description}</p>
          {/* price section is here */}
          <div>
            <p className="text-secondary text-[30px] font-semibold">{`Rs. ${value.price} `}</p>
            <div className="flex gap-2">
              <p className="text-gray-500 line-through">Rs .2034</p>
              <p className="text-black dark:text-white">-10%</p>
            </div>
          </div>
          {/* quantity controll section is here */}
          <div
            className="flex items-center 
           gap-4"
          >
            <IoIosArrowBack
              className="border text-[30px] border-secondary hover:border-gray-400 cursor-pointer"
              onClick={() => DecreasingQty(value.id)}
            />
            <p className="text-[21px] cursor-pointer">{value.ItemNum}</p>
            <IoIosArrowForward
              className="border text-[30px] border-secondary hover:border-gray-400 cursor-pointer"
              onClick={() => IncreasingQty(value.id)}
            />
          </div>
          <p className="font-bold my-4">
            {"Sub Total: Rs. " + value.ThisItemPrice}
          </p>
        </div>
        <button
          className="absolute bg-secondary rounded-full px-4 py-1 top-[80%]  -right-[93px] group-hover:-right-0 duration-300 text-white text-[20px]"
          onClick={() => removeItem(value.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default CartProductCard;
