import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import CartContent from "./CartContent";
import LoadedCartBtns from "./LoadingCartBtns";
import ScreenCover from "../../../components/ScreenCover";
import { createContext, useContext, useEffect } from "react";
import { AppContext } from "../../../App";
import axios from "axios";

export const CartIconContext = createContext("");

const Cart = ({ cartOpen, toggleCart }) => {
  const { cartRefresh, setCartRefresh, cartProducts } = useContext(AppContext);

  const cartContent = cartProducts && cartProducts.length;
  let totalPrice = 0;
  if (cartProducts && cartProducts.length !== 0) {
    cartProducts.forEach((item) => {
      totalPrice = totalPrice + parseFloat(item.price) * item.quantity;
    });
  }

  const handleDelete = async (id) => {
    const response = await axios.delete(
      `http://localhost:5000/cart-delete/${id}`
    );
    console.log(response);
    setCartRefresh(true);
  };

  const handleQuantity = async (func, id, quantity) => {
    if (func === "add") {
      console.log("clicked");
      const response = await axios.patch(
        `http://localhost:5000/cart-update/${id}`,
        {
          quantity: quantity + 1,
        }
      );
      console.log(response);
    } else {
      if (quantity > 1) {
        const response = await axios.patch(
          `http://localhost:5000/cart-update/${id}`,
          {
            quantity: quantity - 1,
          }
        );
        console.log(response);
      }
    }
    setCartRefresh(true);
  };

  useEffect(() => {
    setCartRefresh(false);
  }, [cartRefresh, setCartRefresh]);

  const cartIconContextValue = {
    handleQuantity,
    handleDelete,
  };

  return (
    <>
      <section
        className="cart"
        style={{ transform: cartOpen && "translateX(0)" }}
      >
        <CartIconContext.Provider value={cartIconContextValue}>
          <div className="cart-title-content">
            <span className="cart-title-close">
              <h3>Shopping cart</h3>
              <button onClick={toggleCart}>
                <FontAwesomeIcon icon={faClose} />
              </button>
            </span>
            {cartContent && !cartRefresh ? (
              <CartContent />
            ) : (
              <h3>Cart is empty</h3>
            )}
          </div>
          {cartContent ? (
            <LoadedCartBtns totalPrice={totalPrice.toFixed(2)} />
          ) : (
            <Link to={"/collection"}>CONTINUE SHOPPING</Link>
          )}
        </CartIconContext.Provider>
      </section>
      {cartOpen && <ScreenCover toggleMenu={toggleCart} />}
    </>
  );
};
export default Cart;
