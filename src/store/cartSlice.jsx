import { createSlice } from "@reduxjs/toolkit";

const getLocalCartData = () => {
  let cartData = localStorage.getItem("cart-item");

  if (cartData == []) {
    return [];
  } else {
    return JSON.parse(cartData);
  }
};

export const cartSlice = createSlice({
  name: "cartProduct",
  initialState: {
    cartItem: getLocalCartData(),
    total_Item: "",
    total_Amount: 0,
    shipping_Fee: 50000,
    
  },
  reducers: {
    addToCartProducts: (state, action) => {
      let newId = action.payload.id + action.payload.color;

      let existingProduct = state.cartItem.find(
        (curProd) => curProd.id === newId
      );

      if (existingProduct) {
        state.cartItem = state.cartItem.map((curProd) => {
          if (curProd.id === newId) {
            if (curProd.amount < curProd.stock) {
              curProd.amount += action.payload.amount;
            }
            return curProd;
          } else {
            return curProd;
          }
        });
      } else {
        let cartProduct;

        cartProduct = {
          id: newId,
          name: action.payload.product.name,
          color: action.payload.color,
          amount: action.payload.amount,
          stock: action.payload.product.stock,
          image: action.payload.product.image[0].url,
          price: action.payload.product.price,
          max: action.payload.product.stock,
        };
        state.cartItem = [...state.cartItem, cartProduct];
      }

      localStorage.setItem("cart-item", JSON.stringify(state.cartItem));
    },

    deleteProductFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter((curProd) => {
        return curProd.id !== action.payload;
      });
      localStorage.setItem("cart-item", JSON.stringify(state.cartItem));
    },

    clearCart: (state, action) => {
     

      state.cartItem = [];
      localStorage.setItem("cart-item", JSON.stringify(state.cartItem));
    },
    increment: (state, action) => {
      const id = action.payload;
      state.cartItem = state.cartItem.map((curProd) => {
        if (curProd.id === id) {
          curProd.amount += 1;
          return curProd;
        } else {
          return curProd;
        }
      });
    },
    decrement: (state, action) => {
      const id = action.payload;
      state.cartItem = state.cartItem.map((curProd) => {
        if (curProd.id === id) {
          curProd.amount -= 1;
          return curProd;
        } else {
          return curProd;
        }
      });
    },
    total_Amount: (state) => {
      state.total_Amount = state.cartItem.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0);
    },
  },
});

export const cartProductsAction = cartSlice.actions;
