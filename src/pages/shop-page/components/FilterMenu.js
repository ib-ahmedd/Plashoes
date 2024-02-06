import { useContext } from "react";
import SearchBar from "../../navbar/SearchBar";
import FilterByCategory from "./FilterByCategory";
import { ShopPageContext } from "../ShopPage";
import ShopByPrice from "./SortByPrice";

const FilterMenu = () => {
  const { isMenuOpen } = useContext(ShopPageContext);
  return (
    <div className="filter-menu" style={isMenuOpen}>
      <SearchBar />
      <ShopByPrice />
      <FilterByCategory />
    </div>
  );
};

export default FilterMenu;
