import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    addInitialProduct: (state, action) => {
      state.products = action.payload;
    },
    
  
  },
});

export const productAction = productSlice.actions;
