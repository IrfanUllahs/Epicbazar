import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  //   todos: [
  // {
  //   id: 1,
  //   text: "hi this is Irfan",
  // },
  cartProductCount: 0,
  searchQuery: "",
  TotalCartPrice: 0,
  CartItems: [
    // {
    //   id: 1,
    //   text: "hi this is Irfan",
    // },
  ],
};
export const cartSlice = createSlice({
  name: "cartProduct",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const item = {
        ...action.payload,
        ItemNum: 1,
        ThisItemPrice: action.payload.price,
      };

      if (!action.payload) {
        alert("enter a message");
        return;
      }
      state.CartItems.push(item);
    },
    removeFromCart: (state, action) => {
      state.CartItems = state.CartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    addingCartcount: (state, action) => {
      state.cartProductCount = state.cartProductCount + 1;
    },
    removeCartcount: (state, action) => {
      state.cartProductCount = state.cartProductCount - 1;
    },
    incrementItemNum: (state, action) => {
      const item = state.CartItems.find((value) => value.id === action.payload);
      if (item) {
        item.ItemNum < 4 ? (item.ItemNum += 1) : "";
        item.ThisItemPrice = item.ItemNum * item.price;
      }
    },
    decrementItemNum: (state, action) => {
      const item = state.CartItems.find((value) => value.id === action.payload);
      if (item) {
        item.ItemNum > 1 ? (item.ItemNum -= 1) : "";
        item.ThisItemPrice = item.ItemNum * item.price;
      }
    },
    TotalPriceOfCart: (state, action) => {
      state.TotalCartPrice = state.CartItems.reduce((accumulator, item) => {
        return (accumulator += item.ThisItemPrice);
      }, 0);
    },
    searchQuerymethod: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});
export const {
  addtoCart,
  removeFromCart,
  addingCartcount,
  removeCartcount,
  incrementItemNum,
  decrementItemNum,
  TotalPriceOfCart,
  searchQuerymethod,
} = cartSlice.actions;
export default cartSlice.reducer;
