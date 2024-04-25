import { useContext } from "react";
import { ShopPageContext } from "../ShopPage";

const FilterButton = ({ text }) => {
  const { handleFilterCat, filterCategory } = useContext(ShopPageContext);
  return (
    <button
      onClick={() => {
        handleFilterCat(text);
      }}
      style={text === filterCategory ? { color: "var(--orange)" } : {}}
    >
      {text}
    </button>
  );
};
export default FilterButton;
