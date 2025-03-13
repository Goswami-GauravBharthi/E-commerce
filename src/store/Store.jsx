import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";
import { filterProductsSlice } from "./filterProductsSlice";
import { cartSlice } from "./cartSlice";



export const Store=configureStore({
  reducer:{
    products:productSlice.reducer,
    filterProductsData:filterProductsSlice.reducer,
    cartProducts:cartSlice.reducer,
  }
})