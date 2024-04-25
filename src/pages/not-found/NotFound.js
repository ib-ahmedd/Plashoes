import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="not-found">
      <article>
        <h1>Page not found</h1>
        <Link to={"/"} replace>
          HOME
        </Link>
        <Link to={"/collection"} replace>
          SHOP
        </Link>
      </article>
    </main>
  );
};
export default NotFound;
