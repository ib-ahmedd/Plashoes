import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import CartContent from "./CartContent";
import LoadedCartBtns from "./LoadingCartBtns";
import ScreenCover from "../../../components/ScreenCover";
import useFetch from "../../../hooks/useFetch";
import { useContext } from "react";
import { AppContext } from "../../../App";

const Cart = ({ cartOpen, toggleCart }) => {
  const { user } = useContext(AppContext);
  const { id } = user;
  const { products, isLoading } = useFetch(`/cart/${id}`);
  const cartContent = products.length;
  let totalPrice = 0;
  if (products.length !== 0) {
    products.forEach((item) => {
      totalPrice = totalPrice + parseFloat(item.price) * item.quantity;
    });
  }
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
          {cartContent ? (
            <CartContent products={products} isLoading={isLoading} />
          ) : (
            <h3>Cart is empty</h3>
          )}
        </div>
        {cartContent ? (
          <LoadedCartBtns totalPrice={totalPrice.toFixed(2)} />
        ) : (
          <Link to={"/collection"}>CONTINUE SHOPPING</Link>
        )}
      </section>
      {cartOpen && <ScreenCover toggleMenu={toggleCart} />}
    </>
  );
};
export default Cart;
