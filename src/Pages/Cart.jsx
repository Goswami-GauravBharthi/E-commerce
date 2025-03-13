import { useDispatch, useSelector } from "react-redux";
import "./css/cart.css";
import { IoBagRemove } from "react-icons/io5";
import { CartProduct } from "../Helpers/CartProduct";
import { FormatePrice } from "../Helpers/FormatePrice";
import { cartProductsAction } from "../store/cartSlice";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

export const Cart = () => {
  const { cartItem, total_Amount } = useSelector((state) => state.cartProducts);
  const dispatch = useDispatch();

  const handleClearBtn = () => {
    dispatch(cartProductsAction.clearCart("hey"));
  };

  useEffect(() => {
    dispatch(cartProductsAction.total_Amount());
  }, [cartItem]);

  if (cartItem.length == 0) {
    return (
      <div className="empty-cart-section ">
        <div className="w-full flex items-center justify-center">
          <img src="./images/empty.svg" alt="" className="w-[30%]" />
        </div>
        <p className="text-center empty-cart">no items</p>
        <p className="text-center  ">
          <NavLink to="/product" className="bg-amber-700 simple-btn">
            Buy Product
          </NavLink>
        </p>
      </div>
    );
  } else
    return (
      <section className="cart-section">
        <div className="car-container container">
          {/* cart info */}
          <div className="cart-products-info ">
            <div className="flex  items-center justify-between">
              <h2 className="cart-title text-5xl sm:text-6xl ">
                Shopping Cart
              </h2>
              <p>
                {cartItem.length > 0 ? `${cartItem.length}  items ` : "Empty"}{" "}
              </p>
            </div>

            <div className="all-details">
              <div className="title-div ">
                <p className="">Products details</p>
                <div className="title-div-2">
                  <p>Quantity</p>
                  <p>total</p>
                  <p>remove</p>
                </div>
              </div>

              {cartItem?.map((curProd) => {
                return <CartProduct product={curProd} key={curProd.id} />;
              })}
            </div>

            {/* clear btn */}
            <div className="w-full h-15 flex items-center justify-end">
              <button
                className="simple-btn clear-btn "
                onClick={() => {
                  dispatch(cartProductsAction.clearCart("hey"));
                }}
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* order-info */}
          <div className="order-info ">
            <h2 className="text-4xl cart-title">Order Summery</h2>

            <div className="order-details ">
              <div className="order-texts flex items-center justify-between">
                <p>items </p>
                <p>{cartItem.length}</p>
              </div>
              <div className="order-texts flex items-center justify-between">
                <p>Total</p>
                <p>
                  <FormatePrice price={total_Amount} />
                </p>
              </div>
              <div className="order-texts flex items-center justify-between">
                <p>Delivery charge</p>
                <p>
                  <FormatePrice price={6000} />
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between  total-div">
              <p>grand total</p>
              <p>
                <FormatePrice price={total_Amount + 6000} />
              </p>
            </div>
            <div className="text-end">
              <button className="order-btn">Place Order</button>
            </div>
          </div>
        </div>
      </section>
    );
};
