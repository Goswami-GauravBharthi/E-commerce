import { NavLink } from "react-router-dom";
import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

export const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        {/* toper div */}
        <div className="top-div container">
          <p>
            Ready to get started?
            <br /> Talk to us today
          </p>
          <button className="simple-btn">Get Started</button>
        </div>

        {/* footer info */}
        <div className="footer-info container">
          <div className="footer-info-div">
            <h3>Gaurav store</h3>
            <p>Get the best deals on all products</p>
          </div>

          <div className="footer-info-div">
            <p>Subscribe to fet important update</p>
            <form action="" className="flex flex-col gap-5">
              <input type="email " placeholder="your E-mail" required />
              <button type="subbit" className="simple-btn ">
                Subscribe
              </button>
            </form>
          </div>

          <div className="footer-info-div">
            <p>Follow us</p>
            <div className="flex gap-10  ">
              <BsInstagram size={22} className="icon" />
              <FaFacebookSquare size={22} className="icon" />
              <SiDiscord size={22} className="icon" />
            </div>
          </div>

          <div className="footer-info-div">
            <p>Call us</p>
            <p>+91 1234567890</p>
          </div>
        </div>

        <div className="  flex align-center justify-evenly  uppercase container ">
          <p
            style={{ paddingTop: "20px", fontSize: "1.2rem" }}
            className="font-extralight  "
          >
            © Copyright 2025, All rights reserved!
          </p>

          <div
            style={{ paddingTop: "20px" }}
            className="font-extralight text-sm "
          >
            <p style={{ fontSize: "1.2rem" }}>Privacy policy</p>
            <p style={{ fontSize: "1.2rem" }}>term & condition</p>
          </div>
        </div>
      </footer>
    </>
  );
};
