import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartAdd = ({ shoe_name }) => {
  return (
    <>
      <article className="cart-page-update">
        <p>
          <FontAwesomeIcon icon={faCircleCheck} className="cart-page-check" /> 1
          x {shoe_name} added to cart.
        </p>
      </article>
    </>
  );
};
export default CartAdd;
