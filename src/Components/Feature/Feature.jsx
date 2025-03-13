import "./feature.css";
import { NavLink } from "react-router-dom";
import { FormatePrice } from "../../Helpers/FormatePrice";
import { useSelector } from "react-redux";

export const Feature = () => {
  const { products } = useSelector((state) => state.products);

  const featureProduct = products?.filter(
    (curElem) => curElem.featured === true
  );

  return (
    <section className="feature-section">
      <div className="container">
        <p className="title">Check now</p>
        <h2>Our Feature Services</h2>

        <ul>
          {featureProduct?.map((curProduct) => {
            const { image, category, name, price, id } = curProduct;
            return (
              <NavLink key={id} to={`/singleProduct/${id}`}>
                <li key={id}>
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
      </div>
    </section>
  );
};
