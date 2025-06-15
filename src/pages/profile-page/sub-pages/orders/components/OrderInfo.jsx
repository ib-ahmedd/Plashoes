import { Link } from "react-router-dom";
import ApiImage from "../../../../../components/ApiImage";
const OrderInfo = ({
  id,
  product_id,
  image,
  product_name,
  totalprice,
  quantity,
  date_ordered,
  order_status,
}) => {
  return (
    <article className="order-info">
      <span className="orders-image-details">
        <ApiImage imgPath={image} desc={product_name} />
        <span className="orders-details">
          <h2>{product_name}</h2>
          <p className="order-price">Price: ${totalprice}</p>
          <p>Quantity: {quantity}</p>
          <p>Status: {order_status}</p>
          <p className="order-date">On {date_ordered}</p>
        </span>
      </span>
      <span className="buttons-span">
        <Link to={`/product/${product_id}`} className="product">
          SEE PRODUCT
        </Link>
        <Link
          to={`/profile/orders/${id}`}
          state={{ cLink: "/profile/orders" }}
          className="order-details"
        >
          ORDER DETAILS
        </Link>
      </span>
    </article>
  );
};
export default OrderInfo;
