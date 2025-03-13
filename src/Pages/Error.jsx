import { Link } from "react-router-dom";
import "./css/errorpag.css";

export const ErrorPage = () => {
  return (
    <div className="error-section w-full h-[90vh] flex flex-col  items-center justify-evenly ">
      <h1 className="text-4xl">404 - Page Not Found</h1>
      <img src="./images/404.svg" alt="" className="w-[50%] " />

      <p className="text-center ">
        Oops! The page you're looking for doesn't exist.
      </p>

      <Link to="/">
        <button className="simple-btn">Go back to Home</button>
      </Link>
    </div>
  );
};
