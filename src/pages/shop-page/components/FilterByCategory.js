import { useContext } from "react";
import FilterButton from "./FilterButton";
import { ShopPageContext } from "../ShopPage";
import useFetch from "../../../hooks/useFetch";

const FilterByCategory = () => {
  const { page } = useContext(ShopPageContext);
  const { products: productCategories } = useFetch(
    `/product-categories/${page}`
  );
  let categories = [];
  if (productCategories) {
    categories = productCategories;
  }
  const categoriesDisplay = categories.map((item) => (
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
