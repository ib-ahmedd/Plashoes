import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import SetQuantity from "../../../../components/SetQuantity";
import ApiImage from "../../../../components/ApiImage";
import { Link } from "react-router-dom";

const CartItem = ({
  image,
  shoe_name,
  quantity,
  price,
  id,
  product_id,
  handleDelete,
  handleQuantity,
}) => {
  const totalItemPrice = quantity * price;
  return (
    <article className="cart-item">
      <div className="cart-item-left">
        <ApiImage imgPath={image} desc={shoe_name} />
        <span>
          <Link to={`/product/${product_id}`}>{shoe_name}</Link>
          <SetQuantity
            quantity={quantity}
            handleQuantity={handleQuantity}
            id={id}
          />
        </span>
      </div>
      <div className="cart-item-right">
        <button
          onClick={() => {
            handleDelete(id);
          }}
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <p>${totalItemPrice.toFixed(2)}</p>
      </div>
    </article>
  );
};
export default CartItem;
