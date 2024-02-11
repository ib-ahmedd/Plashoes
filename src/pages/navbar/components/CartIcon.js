import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart from "./Cart";
import { useState } from "react";

const CartIcon = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const toggleCart = () => {
    setCartOpen((prevState) => !prevState);
  };
  return (
    <div className="cart-icon">
      <button onClick={toggleCart}>
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
      <Cart cartOpen={cartOpen} toggleCart={toggleCart} />
    </div>
  );
};

export default CartIcon;
