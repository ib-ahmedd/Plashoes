import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart from "../Cart";
import { useContext } from "react";
import { AppContext } from "../../../../App";
import CartItemsCount from "./CartItemsCount";
const CartIcon = () => {
  const { setCartOpen } = useContext(AppContext);
  const toggleCart = () => {
    setCartOpen((prevState) => !prevState);
  };

  return (
    <div className="cart-icon">
      <button onClick={toggleCart}>
        <CartItemsCount />
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
      <Cart toggleCart={toggleCart} />
    </div>
  );
};

export default CartIcon;
