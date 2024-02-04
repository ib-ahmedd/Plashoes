import FilterSort from "./FilterSort";

const ItemsDisplay = ({ category }) => {
  return (
    <>
      <h1>{category}</h1>
      <FilterSort resultCount={"0"} />
    </>
  );
};
export default ItemsDisplay;
