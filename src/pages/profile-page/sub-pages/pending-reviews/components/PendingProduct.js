import { Link } from "react-router-dom";
import Image from "../../../../../components/Image";
const PendingProduct = ({
  shoe_name,
  id,
  product_id,
  date_delivered,
  image,
}) => {
  return (
    <article className="pending-product">
      <div>
        <Image source={"http://localhost:5000/" + image} alter={shoe_name} />
        <span>
          <h2>{shoe_name}</h2>
          <p className="order">Order #: {id}</p>
          <p className="delivered">Delivered on {date_delivered}</p>
        </span>
      </div>
      <Link
        to={`/profile/reviews/${product_id}`}
        state={{ cLink: "/profile/reviews", id: id }}
      >
        RATE THIS PRODUCT
      </Link>
    </article>
  );
};
export default PendingProduct;
