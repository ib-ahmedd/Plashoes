import { useContext } from "react";
import { ShopPageContext } from "../ShopPage";

const SortOptions = () => {
  const { handleChange, selectedOption } = useContext(ShopPageContext);
  const options = [
    "Default sorting",
    "popularity",
    "average rating",
    "latest",
    "price: low to high",
    "price: high to low",
  ];
  const sortOptionsDisplay = options.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));
  return (
    <select
      className="shop-sort"
      onChange={handleChange}
      value={selectedOption}
    >
      {sortOptionsDisplay}
    </select>
  );
};
export default SortOptions;
