import { Link } from "react-router-dom";

const NoRecent = () => {
  return (
    <article className="no-recent">
      <p>You haven't viewed any products recently</p>
      <Link to={"/collection"}>CONTINUE SHOPPING</Link>
    </article>
  );
};
export default NoRecent;
