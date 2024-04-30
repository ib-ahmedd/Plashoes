import { Link } from "react-router-dom";

const NoResult = () => {
  return (
    <article className="no-result">
      <p>No items match your search</p>
      <Link to={"/collection"}>CONTINUE SHOPPING</Link>
    </article>
  );
};
export default NoResult;
