import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./ProductsSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    products: ProductsSlice,
    cart: cartSlice,
  },
});
