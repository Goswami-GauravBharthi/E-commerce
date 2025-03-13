import { IoBagRemove } from "react-icons/io5";
import "./../Pages/css/cart.css";
import "./FormatePrice.jsx";
import { FormatePrice } from "./FormatePrice.jsx";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartProductsAction } from "../store/cartSlice.jsx";

export const CartProduct = ({ product }) => {
  const { name, image, price, id, color, amount, stock } = product;

  const dispatch = useDispatch();

  const increment = (id) => {
    if (amount < stock) {
      dispatch(cartProductsAction.increment(id));
    }
  };
  const decrement = (id) => {
    if (amount > 1) {
      dispatch(cartProductsAction.decrement(id));
    }
  };

  useEffect(() => {
    dispatch(cartProductsAction.total_Amount());
  }, [amount]);

  return (
    <div className="product-div text-center  ">
      <div className="image-and-info gap-2 ">
        <div className=" img-div ">
          <img src={image} alt="" />
        </div>

        <div className="flex info-div flex-col justify-around items-center">
          <p>
            {name}{" "}
            <button
              className="w-7 h-7 color-div  rounded-full"
              style={{ backgroundColor: color, marginTop: "5px" }}
            ></button>
          </p>

          <p>
            {" "}
            <FormatePrice price={price} />
          </p>
        </div>
      </div>

      <div className="other-div grid-cols-3 items-center">
        <div className="flex items-center  justify-evenly  sm:justify-around bg-[rgba(35,35,35)]">
          <button onClick={() => decrement(id)}>-</button>
          <p className="amount">{amount}</p>
          <button onClick={() => increment(id)}>+</button>
        </div>

        <p className="">
          <FormatePrice price={price * amount} />
        </p>

        <button>
          <IoBagRemove
            onClick={() =>
              dispatch(cartProductsAction.deleteProductFromCart(id))
            }
          />
        </button>
      </div>
    </div>
  );
};
