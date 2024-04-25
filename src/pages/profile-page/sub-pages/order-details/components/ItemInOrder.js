import { useNavigate } from "react-router-dom";
import ApiImage from "../../../../../components/ApiImage";

const ItemsInOrder = ({ orderDetails, buyLoading, buyAgain }) => {
  const {
    order_status,
    date_ordered,
    quantity,
    shoe_name,
    price,
    image,
    product_id,
  } = orderDetails;
  const navigate = useNavigate();
  return (
    <article className="items-in-order">
      <div className="left">
        <p
          className="status"
          style={{ backgroundColor: order_status === "Delivered" && "green" }}
        >
          {order_status}
        </p>
        <p className="date">On {date_ordered}</p>
        <span className="outer-span">
          <div className="image">
            <ApiImage imgPath={image} desc={shoe_name} />
          </div>
          <span className="inner-span">
            <h3>{shoe_name}</h3>
            <p className="qty">QTY: {quantity}</p>
            <p className="price">Price: ${price}</p>
          </span>
        </span>
      </div>
      <div className="right">
        {!buyLoading ? (
          <button
            className="buy"
            onClick={() => {
              buyAgain(product_id, shoe_name);
            }}
          >
            BUY AGAIN
          </button>
        ) : (
          <button
            className="buy"
            style={{ backgroundColor: "var(--grey)" }}
            disabled
          >
            BUY AGAIN
          </button>
        )}
        <button
          className="view"
          onClick={() => {
            navigate(`/product/${product_id}`);
          }}
        >
          VIEW PRODUCT
        </button>
      </div>
    </article>
  );
};
export default ItemsInOrder;
