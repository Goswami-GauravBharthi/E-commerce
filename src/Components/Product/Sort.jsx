import { useState } from "react";
import "./sort.css";
import { BsGrid3X2GapFill } from "react-icons/bs";
import { CiGrid2H } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { filterProductAction } from "../../store/filterProductsSlice";

export const Sort = () => {
  const [selectValue, setSelectValue] = useState("Price(a-z)");
  const { filterProducts } = useSelector((state) => state.filterProductsData);
  const dispatch = useDispatch();

  dispatch(filterProductAction.filterUsingPrice(selectValue));

  return (
    <div className="sort-section">
      <div className=" sort-icon gap-4 ">
        <BsGrid3X2GapFill
          onClick={() => dispatch(filterProductAction.setGridView(true))}
        />
        <CiGrid2H
          onClick={() => dispatch(filterProductAction.setGridView(false))}
        />
      </div>

      <p>{filterProducts.length} Total products</p>

      <select
        width={100}
        value={selectValue}
        onChange={(e) => {
          setSelectValue(e.target.value);
          dispatch(filterProductAction.filterUsingPrice(e.target.value));
        }}
      >
        <option value="Price(a-z)">Price(a-z)</option>
        <option value="Price(z-a)">Price(z-a)</option>
        <option value="Low to High">Low to High</option>
        <option value="High to Low">High to Low</option>
      </select>
    </div>
  );
};
