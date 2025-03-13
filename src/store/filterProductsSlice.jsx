import { createSlice } from "@reduxjs/toolkit";


export const filterProductsSlice = createSlice({
  name: "filterProducts",
  initialState: {
    allProducts: [],
    filterProducts: [],
    gridView: true,
  },
  reducers: {
    addInitialFilterProducts: (state, action) => {
      state.allProducts = action.payload;
      state.filterProducts = state.allProducts;
    },
    setGridView: (state, action) => {
      state.gridView = action.payload;
    },
    resetFilter: (state, action) => {
      state.filterProducts = state.allProducts;
    },
    filterUsingPrice: (state, action) => {
      switch (action.payload) {
        case "Price(a-z)":
          state.filterProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "Price(z-a)":
          state.filterProducts.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "Low to High":
          state.filterProducts.sort((a, b) => a.price - b.price);
          break;
        case "High to Low":
          state.filterProducts.sort((a, b) => b.price - a.price);
          break;
        default:
          state;
      }
    },
    searchFilterProduct: (state, action) => {
      if (action.payload) {
        state.filterProducts = state.allProducts.filter((curProd) =>
          curProd.name
            .toLowerCase()
            .includes(action.payload.toLowerCase().trimEnd())
        );
      } else {
        state.filterProducts = state.allProducts;
      }
    },
    filterUsingCategory: (state, action) => {
     
      if (action.payload === "all") {
        state.filterProducts = state.allProducts;
      } else {
        state.filterProducts = state.allProducts.filter((curProd) => {
          return curProd.category === action.payload;
        });
      }
    },
    filterUsingCompany: (state, action) => {
      let tmp;
      if (action.payload === "all") {
        state.filterProducts = state.allProducts;
      } else {
        tmp = state.allProducts.filter((curProd) => {
          return curProd.company === action.payload;
        });
        state.filterProducts = tmp;
      }
    },
    filterUsingColor: (state, action) => {
     
      if (action.payload === "all") {
        state.filterProducts = state.allProducts;
      } else {
        state.filterProducts = state.allProducts.filter((curElem) => {
          return curElem.colors.includes(action.payload);
        });
      }
    },
    filterUsingRangePrice: (state, action) => {
      state.filterProducts = state.allProducts.filter((curProd) => {
        return curProd.price <= action.payload;
      });
    
    },
  },
});

export const filterProductAction = filterProductsSlice.actions;
