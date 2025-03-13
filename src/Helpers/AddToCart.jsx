import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartProductsAction } from "../store/cartSlice";

export const AddToCart = ({ product }) => {
  const dispatch = useDispatch();
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [popShow, setPopup] = useState(false);

  const [amount, setAmount] = useState(1);

  const increment = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  const decrement = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const handleAddToCart = (id, color, amount, product) => {
    dispatch(
      cartProductsAction.addToCartProducts({ id, color, amount, product })
    );
    setPopup(true);
  };
  return (
    <>
      <div>
        {
          <p className="flex items-center gap-2">
            Color :
            {colors.map((curColor, index) => {
              return (
                <button
                  onClick={() => setColor(curColor)}
                  key={index}
                  style={{ backgroundColor: curColor }}
                  className={
                    color === curColor ? "color-btn active" : "color-btn"
                  }
                >
                  {color === curColor ? "✔️" : ""}
                </button>
              );
            })}
          </p>
        }
      </div>

      <div className="inc-dis-btns">
        <button onClick={decrement}>-</button>
        <p>{amount}</p>
        <button onClick={increment}>+</button>
      </div>

      <button
        className="simple-btn cart"
        onClick={() => {
          handleAddToCart(id, color, amount, product);
        }}
      >
        Add to Cart
      </button>


{/* popup */}
      <div
        className={`w-96 h-46 transition-all  duration-400  ease-in-out bg-green-700/90 grid flex-col items-center justify-center fixed   -transform-x-[50%] transform -translate-x-1/2 -translate-y-1/2 z-30 ${
          !popShow ? "-top-[100%]" : "top-[50%] left-[50%]"
        } `}
      >
        <p className="text-center text-4xl capitalize">
          {" "}
          product is added to cart
        </p>
        <button
          className="bg-amber-400 w-30 text-4xl capitalize "
          onClick={() => setPopup(false)}
        >
          ok
        </button>
      </div>
    </>
  );
};
