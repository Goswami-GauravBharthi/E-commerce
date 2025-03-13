import { useState } from "react";
import "./filter.css";
import { FormatePrice } from "../../Helpers/FormatePrice";
import { useDispatch, useSelector } from "react-redux";
import { filterProductAction } from "../../store/filterProductsSlice";
import { IoArrowBackCircle } from "react-icons/io5";

export const Filter = ({ showFilter, setShowFilter }) => {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.filterProductsData);

  const getUniqueColorData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    if (attr === "colors") {
      // return [...new Set([].concat(...newVal))];
      newVal = newVal.flat();
    }
    return (newVal = ["all", ...new Set(newVal)]);
  };

  const ColorData = getUniqueColorData(allProducts, "colors");

  const minPrice = Math.min(...allProducts.map((p) => p.price));
  const maxPrice = Math.max(...allProducts.map((p) => p.price));

  const [price, setPrice] = useState(6000000);
  const [inputValue, setInputValue] = useState("");
  const [selectValue, setSelectValue] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const categories = [
    "All",
    "Mobile",
    "Laptop",
    "Computer",
    "Accessories",
    "Watch",
  ];

  return (
    <div className={`filter-data ${showFilter ? "" : "hideFilter"}`}>
      <div
        className="absolute right-7 top-4 cursor-pointer md:hidden"
        onClick={() => {
          setShowFilter(!showFilter);
        }}
      >
        <IoArrowBackCircle size={30} />
      </div>

      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder="Name"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            dispatch(filterProductAction.searchFilterProduct(e.target.value));
          }}
        />
        <label htmlFor="name" className="form__label">
          SEARCH
        </label>
      </div>

      <div>
        <h2>Category</h2>
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              className={activeIndex === index ? "active" : ""}
              onClick={() => {
                setActiveIndex(index);
                dispatch(
                  filterProductAction.filterUsingCategory(
                    category.toLocaleLowerCase()
                  )
                );
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Company</h2>
        <select
          value={selectValue}
          onChange={(e) => {
            setSelectValue(e.target.value);
            dispatch(filterProductAction.filterUsingCompany(e.target.value));
          }}
        >
          <option value="all">All</option>
          <option value="apple">apple</option>
          <option value="samsung">samsung</option>
          <option value="dell">dell</option>
          <option value="nokia">nokia</option>
          <option value="asus">asus</option>
          <option value="lenova">lenova</option>
          <option value="rolex">rolex</option>
        </select>
      </div>

      <div>
        <h2>Color</h2>
        <div className="flex gap-2 ">
          {ColorData.map((curColor, index) => {
            return (
              <button
                key={index}
                className="color-btn cursor-pointer"
                style={{ background: curColor }}
                onClick={() => {
                  dispatch(filterProductAction.filterUsingColor(curColor));
                }}
              >
                {curColor === "all" && "All"}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <h2>Price</h2>
        <p>
          <FormatePrice price={price} />
        </p>
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={(e) => {
            setPrice(Number(e.target.value));
            dispatch(
              filterProductAction.filterUsingRangePrice(Number(e.target.value))
            );
          }}
          className="w-full mt-3 range  cursor-pointer"
        />
      </div>

      <button
        className="clear-filter-btn"
        onClick={() => {
          setInputValue(""),
            setSelectValue("All"),
            setActiveIndex(0),
            setPrice(6000000),
            dispatch(filterProductAction.resetFilter());
        }}
      >
        CLEAR FILTER
      </button>
    </div>
  );
};
