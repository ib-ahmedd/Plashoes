import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SortOptions from "./SortOptions";
import { useContext } from "react";
import { ShopPageContext } from "../ShopPage";

const FilterSort = () => {
  const { count, toggleMenu, itemNumbers } = useContext(ShopPageContext);

  return (
    <div className="filter-sort">
      <span>
        <button className="shop-filter-btn" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} /> FILTER SHOES
        </button>
        <p className="result-count-p">
          Showing{" "}
          {count < 13
            ? `all ${count}`
            : `${itemNumbers.start} - ${itemNumbers.end} of ${count}`}{" "}
          results
        </p>
      </span>
      <SortOptions />
    </div>
  );
};

export default FilterSort;
