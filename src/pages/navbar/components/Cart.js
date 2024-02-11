import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import CartContent from "./CartContent";
import LoadedCartBtns from "./LoadingCartBtns";
import ScreenCover from "../../../components/ScreenCover";

const Cart = ({ cartOpen, toggleCart }) => {
  const cartContent = 1;
  return (
    <>
      <section
        className="cart"
        style={{ transform: cartOpen && "translateX(0)" }}
      >
        <div className="cart-title-content">
          <span className="cart-title-close">
            <h3>Shopping cart</h3>
            <button onClick={toggleCart}>
              <FontAwesomeIcon icon={faClose} />
            </button>
          </span>
          <CartContent />
        </div>
        {cartContent ? (
          <LoadedCartBtns />
        ) : (
          <Link to={"/collection"}>CONTINUE SHOPPING</Link>
        )}
      </section>
      {cartOpen && <ScreenCover toggleMenu={toggleCart} />}
    </>
  );
};
export default Cart;
