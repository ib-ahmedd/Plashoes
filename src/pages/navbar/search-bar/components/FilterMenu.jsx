import { useContext } from "react";
import SearchBar from "../../navbar/search-bar/SearchBar";
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
      <SearchBar />
      <ShopByPrice />
      <FilterByCategory />
    </div>
  );
};

export default FilterMenu;
