import { NavLink } from "react-router-dom";
import "./header.css";
import { FaCartShopping } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { BiExit } from "react-icons/bi";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

export const Header = () => {
  const liRef = useRef();
  const { cartItem } = useSelector((state) => state.cartProducts);
  const { loginWithRedirect, logout, isAuthenticated ,user} = useAuth0();

  liRef.current?.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      setShow(false);
    }
  });

  const [show, setShow] = useState(false);

  const handleMenuIcon = () => {
    setShow(!show);
  };

  return (
    <header className="header relative ">
      <nav className="container">
        <NavLink to="/">
          {/* <h1 className="logo">Gaurav_Store</h1> */}
          <img src="/images/logo.png" alt="" className="logo" />
        </NavLink>

        <ul className={show ? "" : "hide-menu"} ref={liRef}>
          <li>
            <NavLink to="/">Home</NavLink>
            <div className="line"></div>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
            <div className="line"></div>
          </li>

          <li>
            <NavLink to="/product">Product</NavLink>
            <div className="line"></div>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
            <div className="line"></div>
          </li>

          

          {isAuthenticated ? (
            <li className="order-1 ">
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button onClick={() => loginWithRedirect()}>Log In</button>
            </li>
          )}

          <li>
            <NavLink to="/cart">
              <FaCartShopping size={25} onClick={() => setShow(false)} />
              <span style={{ color: "white" }}>{cartItem.length}</span>
            </NavLink>
          </li>
          {/* <li>
          <button onClick={() => loginWithRedirect()}>Log In</button>
          </li> */}
        </ul>

        <div className="block md:hidden">
          {isAuthenticated ? (
            <li className="log ">
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </li>
          ) : (
            <li className="log">
              <button onClick={() => loginWithRedirect()}>Log In</button>
            </li>
          )}
        </div>
        {show ? (
          <BiExit
            size={29}
            className="menu-icon rotate"
            onClick={handleMenuIcon}
          />
        ) : (
          <IoMenu size={29} className="menu-icon " onClick={handleMenuIcon} />
        )}
      </nav>
    </header>
  );
};
