import { useQuery } from "@tanstack/react-query";
import { getProductData } from "../api/product";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../store/productSlice";
import { filterProductAction } from "../store/filterProductsSlice";

export const FetchApiData = () => {
  const dispatch = useDispatch();

  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getProductData,
  });

  if (data) {
    dispatch(productAction.addInitialProduct(data));
    dispatch(filterProductAction.addInitialFilterProducts(data));
  }

  return null;
};
