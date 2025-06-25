import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SetQuantity from "../../../components/SetQuantity";
import ApiImage from "../../../components/ApiImage";
import { Link } from "react-router-dom";

const CartTableMobile = ({
  id,
  product_name,
  image,
  price,
  quantity,
  product_id,
  handleQuantity,
  handleDelete,
}) => {
  const subtotal = (price * quantity).toFixed(2);
  return (
    <article className="cart-table-mobile">
      <div>
        <span>
          <ApiImage imgPath={image} desc={product_name} />
          <Link to={`/product/${product_id}`}>{product_name}</Link>
        </span>
        <button
          onClick={() => {
            handleDelete(id);
          }}
        >
          <FontAwesomeIcon icon={faCircleXmark} className="xmark" />
        </button>
      </div>
      <div>
        <h4>Price: </h4>
        <p>${price}</p>
      </div>
      <div>
        <h4>Quantity:</h4>
        <SetQuantity
          quantity={quantity}
          handleQuantity={handleQuantity}
          id={product_id}
        />
      </div>
      <div>
        <h4>Subtotal:</h4> <p>${subtotal}</p>
      </div>
    </article>
  );
};
export default CartTableMobile;
