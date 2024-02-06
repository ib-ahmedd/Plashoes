import { useContext } from "react";
import { ShopPageContext } from "../ShopPage";

const ShopByPrice = () => {
  const { priceRange, handlePriceChange, handleFilterPrice } =
    useContext(ShopPageContext);
  const [minPrice, currency] = [70, "$"];
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
        min={70}
        max={150}
        step={5}
        name="filterPriceRange"
        value={priceRange}
        onChange={handlePriceChange}
      />
      <span>
        <p>{currency + minPrice}</p>
        <p>{currency + priceRange}</p>
      </span>
      <span>
        <button
          onClick={() => {
            handleFilterPrice("set");
          }}
        >
          Set
        </button>
        <button
          onClick={() => {
            handleFilterPrice("reset");
          }}
        >
          Reset
        </button>
      </span>
    </form>
  );
};
export default ShopByPrice;
