import { useContext, useState } from "react";
import { ShopPageContext } from "../ShopPage";
import { AppContext } from "../../../App";

const ShopByPrice = () => {
  const { handleMouseDown } = useContext(AppContext);
  const { priceRange, handlePriceChange, handleFilterPrice, maxAndMinPrice } =
    useContext(ShopPageContext);
  const { minPrice, maxPrice } = maxAndMinPrice;
  const [setClicked, setSetClicked] = useState(false);
  const [resetClicked, setResetClicked] = useState(false);
  return (
    <form
      className="filter-price"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="filterPriceRange">Filter by price</label>
      <br />
      <input
        type="range"
        min={minPrice}
        max={Math.ceil(maxPrice)}
        step={5}
        name="filterPriceRange"
        value={priceRange}
        onChange={handlePriceChange}
      />
      <span>
        <p> ${Math.ceil(minPrice)}</p>
        <p>${Math.ceil(priceRange)}</p>
      </span>
      <span>
        <button
          onClick={() => {
            handleFilterPrice("set");
          }}
          onMouseDown={() => {
            handleMouseDown(setSetClicked);
          }}
          style={{ backgroundColor: setClicked && "var(--clicked-green)" }}
        >
          Set
        </button>
        <button
          onClick={() => {
            handleFilterPrice("reset");
          }}
          onMouseDown={() => {
            handleMouseDown(setResetClicked);
          }}
          style={{ backgroundColor: resetClicked && "var(--clicked-green)" }}
        >
          Reset
        </button>
      </span>
    </form>
  );
};
export default ShopByPrice;
