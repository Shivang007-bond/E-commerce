import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productsSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default appStore;
