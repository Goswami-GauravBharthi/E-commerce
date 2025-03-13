import { NavLink } from "react-router-dom";
import "./allProducts.css";
import { FormatePrice } from "../../Helpers/FormatePrice";

export const ListView = ({ filterProducts }) => {
  return (
    <section className="all-products">
      <ul className="flex flex-col gap-8 ">
        {filterProducts?.map((curProd) => {
          const { id, image, category, description, company, price, name } =
            curProd;

          return (
            <NavLink key={id} to={`/singleProduct/${id}`}>
              <li className=" list-product-card  md:grid-cols-2 rounded-md ">
                <div className="flex items-center">
                  <img src={image} alt="" />
                </div>

                <div className="flex flex-col gap-2 ">
                  <h3 className="text-4xl">{name}</h3>
                  <p>
                    {" "}
                    <FormatePrice price={price} />
                  </p>
                  <p className="hidden sm:block">
                    {description.slice(0, 130) + "..."}
                  </p>
                  <NavLink to={`/singleProduct/${id}`}>
                    <button className="clear-filter-btn">Read More</button>
                  </NavLink>
                </div>
              </li>
            </NavLink>
          );
        })}
      </ul>
    </section>
  );
};
