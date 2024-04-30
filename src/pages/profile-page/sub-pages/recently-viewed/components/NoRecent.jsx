import { Link } from "react-router-dom";

const NoRecent = () => {
  return (
    <article className="no-recent">
      <p className="empty-profile-tab">
        You haven't viewed any products recently
      </p>
      <Link to={"/collection"}>GO TO SHOP</Link>
    </article>
  );
};
export default NoRecent;
