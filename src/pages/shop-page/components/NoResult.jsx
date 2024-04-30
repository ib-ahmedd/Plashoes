import { useContext } from "react";
import { ShopPageContext } from "../ShopPage";

const NoResult = () => {
  const { resetFilters } = useContext(ShopPageContext);
  return (
    <article className="no-result">
      <p>No items match your criterea</p>
      <button onClick={resetFilters} className="reset-filters">
        RESET FILTERS
      </button>
    </article>
  );
};
export default NoResult;
