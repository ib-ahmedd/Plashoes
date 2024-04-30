import { useContext } from "react";
import FilterButton from "./FilterButton";
import { ShopPageContext } from "../ShopPage";

const FilterByCategory = () => {
  const { productCategories } = useContext(ShopPageContext);
  const categoriesDisplay = productCategories.map((item) => (
    <FilterButton text={item.categories} key={item.categories} />
  ));
  return (
    <div className="filter-category">
      <h4>Filter by category</h4>
      <span>
        {categoriesDisplay}
        <FilterButton text={"Default"} />
      </span>
    </div>
  );
};
export default FilterByCategory;
