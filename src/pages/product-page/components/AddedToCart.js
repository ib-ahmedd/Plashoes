import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const AddedToCart = ({ quantity, productName }) => {
  return (
    <div className="added-to-cart">
      <span>
        <FontAwesomeIcon icon={faCircleCheck} className="cart-check-icon" />
        <p>
          {quantity} x "{productName}" {quantity > 1 ? "have" : "has"} been
          added to your cart.
        </p>
      </span>
      <Link to={"/cart"}>VIEW CART</Link>
    </div>
  );
};
export default AddedToCart;
