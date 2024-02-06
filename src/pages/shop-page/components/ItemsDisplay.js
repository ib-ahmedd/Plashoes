import { useContext } from "react";
import { ShopPageContext } from "../ShopPage";
import FilterSort from "./FilterSort";

const ItemsDisplay = () => {
  const { category } = useContext(ShopPageContext);
  return (
    <>
      <h1>{category}</h1>
      <FilterSort />
    </>
  );
};
export default ItemsDisplay;
