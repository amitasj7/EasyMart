import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slice/CartSlice";

export const store = configureStore({
  reducer: {
    // key value pair key == name  = cart
    // value CartSlice
    cart: CartSlice.reducer,
  },
});
