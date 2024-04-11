import { Link } from "react-router-dom";

const SearchResultItem = ({ image, shoe_name, id }) => {
  return (
    <Link to={`/product/${id}`}>
      <img src={"http://localhost:5000/" + image} alt={shoe_name} />
      <p>{shoe_name}</p>
    </Link>
  );
};
export default SearchResultItem;
