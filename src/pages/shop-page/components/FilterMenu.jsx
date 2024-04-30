import { useContext } from "react";
import FilterByCategory from "./FilterByCategory";
import { ShopPageContext } from "../ShopPage";
import ShopByPrice from "./SortByPrice";

const FilterMenu = () => {
  const { isMenuOpen } = useContext(ShopPageContext);
  return (
    <div
      className="filter-menu"
      style={{ transform: isMenuOpen && "translateX(0)" }}
    >
      <ShopByPrice />
      <FilterByCategory />
    </div>
  );
};

export default FilterMenu;
