import { Link } from "react-router-dom";
const OrderInfo = ({
  image,
  alter,
  productName,
  totalAmount,
  quantity,
  dayOrdered,
  link,
  status,
}) => {
  return (
    <div className="order-info">
      <span className="orders-image-details">
        <img src={image} alt={alter} />
        <span className="orders-details">
          <h2>{productName}</h2>
          <p className="order-price">Price: ${totalAmount}</p>
          <p>Quantity: {quantity}</p>
          <p>Status: {status}</p>
          <p className="order-date">On {dayOrdered}</p>
        </span>
      </span>
      <Link to={link}>SEE PRODUCT</Link>
    </div>
  );
};
export default OrderInfo;
