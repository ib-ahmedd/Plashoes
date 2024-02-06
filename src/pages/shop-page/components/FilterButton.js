import { useContext } from "react";
import { ShopPageContext } from "../ShopPage";

const FilterButton = ({ text }) => {
  const { handleFilterCat } = useContext(ShopPageContext);
  return (
    <button
      onClick={() => {
        handleFilterCat(text);
      }}
    >
      {text}
    </button>
  );
};
export default FilterButton;
