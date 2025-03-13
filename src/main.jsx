import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";

import { Home } from "./Pages/Home.jsx";
import { About } from "./Pages/About.jsx";
import { Cart } from "./Pages/Cart.jsx";
import { Contact } from "./Pages/Contact.jsx";
import { SinglePage } from "./Pages/Singlepage.jsx";
import { Product } from "./Pages/Product.jsx";
import { ErrorPage } from "./Pages/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "singleProduct/:id",
        element: <SinglePage />,
      },

      {
        path: "product",
        element: <Product />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
