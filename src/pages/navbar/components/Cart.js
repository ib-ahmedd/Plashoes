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

const Cart = ({ toggleCart }) => {
  const {
    cartRefresh,
    setCartRefresh,
    cartProducts,
    setProducts,
    cartOpen,
    isLoggedIn,
    setCookie,
    accessToken,
  } = useContext(AppContext);

  const cartContent = cartProducts && cartProducts.length;
  let totalPrice = 0;
  if (cartProducts && cartProducts.length !== 0) {
    cartProducts.forEach((item) => {
      totalPrice = totalPrice + parseFloat(item.price) * item.quantity;
    });
  }

  async function handleDelete(id) {
    try {
      if (isLoggedIn) {
        try {
          await axios.delete(`http://localhost:5000/cart-delete/${id}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
        } catch (err) {
          console.log(err);
        }
      } else {
        setProducts((prevState) => {
          const updatedItems = prevState.filter((item) => item.id !== id);
          setCookie("noLogCart", JSON.stringify(updatedItems), 7);
          return updatedItems;
        });
      }
      setCartRefresh(true);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleQuantity(func, id, quantity) {
    if (isLoggedIn) {
      try {
        if (func === "add") {
          await axios.patch(
            `http://localhost:5000/cart-update/${id}`,
            {
              quantity: quantity + 1,
            },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
        } else {
          if (quantity > 1) {
            await axios.patch(
              `http://localhost:5000/cart-update/${id}`,
              {
                quantity: quantity - 1,
              },
              {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
              }
            );
          }
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      setProducts((prevState) => {
        const updatedItems = prevState.map((item) => {
          if (item.id === id) {
            if (func === "add") {
              item.quantity = item.quantity + 1;
            } else {
              if (item.quantity > 1) {
                item.quantity = item.quantity - 1;
              }
            }
          }
          return item;
        });
        setCookie("noLogCart", JSON.stringify(updatedItems), 7);
        return updatedItems;
      });
    }
    setCartRefresh(true);
  }

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
              <p className="cart-empty">No products in cart</p>
            )}
          </div>
          {cartContent ? (
            <LoadedCartBtns
              totalPrice={totalPrice.toFixed(2)}
              isLoggedIn={isLoggedIn}
            />
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
