import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SortOptions from "./SortOptions";
import { useContext, useState } from "react";
import { ShopPageContext } from "../ShopPage";
import { AppContext } from "../../../App";

const FilterSort = () => {
  const { handleMouseDown } = useContext(AppContext);
  const { count, toggleMenu, itemNumbers } = useContext(ShopPageContext);
  const [clicked, setClicked] = useState(false);

  return (
    <div className="filter-sort">
      <span>
        <button
          className="shop-filter-btn"
          onClick={toggleMenu}
          onMouseDown={() => {
            handleMouseDown(setClicked);
          }}
          style={{ backgroundColor: clicked && "var(--clicked-green)" }}
        >
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
