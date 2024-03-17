import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartUpdate = () => {
  return (
    <>
      <article className="cart-page-update">
        <p>
          <FontAwesomeIcon icon={faCircleCheck} className="cart-page-check" />{" "}
          Cart updated.
        </p>
      </article>
    </>
  );
};
export default CartUpdate;
