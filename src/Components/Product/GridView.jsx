import "./allProducts.css";
import { NavLink } from "react-router-dom";
import { FormatePrice } from "../../Helpers/FormatePrice";

export const GridView = ({ filterProducts }) => {
  return (
    <section className="all-products ">
      <ul className="products-card ">
        {filterProducts?.map((curProd) => {
          const { id, image, category, company, price, name } = curProd;

          return (
            <NavLink to={`/singleProduct/${id}`} key={id}>
              <li>
                <figure className="relative">
                  <img src={image} alt="" />
                  <figcaption className="absolute top-4 right-10 ">
                    {category}
                  </figcaption>
                </figure>
                <div className="flex   justify-between details   ">
                  <p>{name}</p>
                  <p>{<FormatePrice price={price} />}</p>
                </div>
              </li>
            </NavLink>
          );
        })}
      </ul>
    </section>
  );
};
