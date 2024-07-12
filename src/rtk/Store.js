import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import {productsAPI} from "./productsAPI";

export const store = configureStore({
	reducer: {
		cart: cartSlice,
		[productsAPI.reducerPath]: productsAPI.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsAPI.middleware),
});
