import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FilterSort = ({ resultCount }) => {
  return (
    <div className="filter-sort">
      <span>
        <button className="shop-filter">
          <FontAwesomeIcon icon={faBars} /> FILTER SHOES
        </button>
        <p>Showing all {resultCount} results</p>
      </span>
      <select className="shop-sort">
        <option>Default sorting</option>
        <option>Sort by popularity</option>
        <option>Sort by average rating</option>
        <option>Sort by latest</option>
        <option>Sort by price: low to high</option>
        <option>Sort by price: high to low</option>
      </select>
    </div>
  );
};

export default FilterSort;
