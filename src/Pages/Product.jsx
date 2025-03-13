import { useState } from "react";
import { AllProducts } from "../Components/Product/AllProducts";
import { Filter } from "../Components/Product/Filter";
import { Sort } from "../Components/Product/Sort";
import "./css/product.css";
import { FcFilledFilter } from "react-icons/fc";
export const Product = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <section className="product-section">
      <div className="container  product-grid">
        <div className="filter-section">
          <FcFilledFilter
            className="filter-icon"
            size={25}
            onClick={() => {
              setShowFilter(!showFilter);
            }}
          />
          <Filter showFilter={showFilter} setShowFilter={setShowFilter} />
        </div>

        <div className="product-sort-section">
          <div>
            <Sort />
          </div>
          <div>
            <AllProducts />
          </div>
        </div>
      </div>
    </section>
  );
};
