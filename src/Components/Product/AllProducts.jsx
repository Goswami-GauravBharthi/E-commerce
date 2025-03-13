import { useSelector } from "react-redux";
import "./allProducts.css";
import { GridView } from "./GridView";
import { ListView } from "./ListView";
export const AllProducts = () => {
  const { filterProducts, gridView } = useSelector(
    (state) => state.filterProductsData
  );

  if (gridView) {
    return <GridView filterProducts={filterProducts} />;
  } else {
    return <ListView filterProducts={filterProducts} />;
  }
};
