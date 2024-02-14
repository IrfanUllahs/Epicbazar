import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../features/addtoCart/AddtoCartSlice";
export const store = configureStore({
  reducer: cartSliceReducer,
});
