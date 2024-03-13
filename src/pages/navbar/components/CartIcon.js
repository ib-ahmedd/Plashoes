import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart from "./Cart";
import { createContext, useContext, useEffect, useState } from "react";
import { AppContext } from "../../../App";

export const CartContext = createContext("");

const CartIcon = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartRefresh, setCartRefresh } = useContext(AppContext);

  useEffect(() => {
    setCartRefresh(false);
  }, [cartRefresh, setCartRefresh]);
  const toggleCart = () => {
    setCartOpen((prevState) => !prevState);
  };

  return (
    <div className="cart-icon">
      <button onClick={toggleCart}>
        <FontAwesomeIcon icon={faCartShopping} />
      </button>
      {!cartRefresh && <Cart cartOpen={cartOpen} toggleCart={toggleCart} />}
    </div>
  );
};

export default CartIcon;
