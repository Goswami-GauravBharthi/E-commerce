import { NavLink } from "react-router-dom";
import "./hero-section.css";

export const HeroSection = ({ text }) => {
  return (
    <section className="hero-section">
      <div className="grid grid-2 hero container">
        <div className="hero-data">
          <p className="welcome">{text}</p>
          <h1>Gaurav Store</h1>
          <p>
            Gaurav Store is an online e-commerce platform offering a wide range
            of quality products, providing customers with convenient shopping,
            fast delivery, and excellent service.
          </p>
          <NavLink to="/product">
            <button className="btn">Shop Now</button>
          </NavLink>
        </div>
        <div className="hero-img">
          <img src="/images/hero-img.svg " alt="" />
        </div>
      </div>
    </section>
  );
};
