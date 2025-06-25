import CartUpdate from "./components/CartUpdate";
import { createContext, useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";

import "../../assets/styles/cart-page/cart-style.css";
import "../../assets/styles/cart-page/cart-tab-style.css";
import "../../assets/styles/cart-page/cart-mobile-style.css";
import "../../assets/styles/cart-page/cart-tab-style.css";
import "../../assets/styles/cart-page/cart-laptop-style.css";
import TableTotal from "./components/TableTotal";
import axios from "axios";
import CartEmpty from "./components/CartEmpty";
import { useLocation } from "react-router-dom";
import CartAdd from "./components/CartAdd";

export const CartPageContext = createContext("");

const CartPage = () => {
  const {
    user,
    cartEmpty,
    isloading,
    setLoading,
    setCartRefresh,
    accessToken,
    isLoggedIn,
    setCookie,
    cartProducts,
  } = useContext(AppContext);
  const { state } = useLocation();
  const { id } = user;
  const [cartUpdated, setCartUpdate] = useState(false);
  const [cartAdded, setCartAdded] = useState(false);

  useEffect(() => {
    if (state && !cartEmpty) {
      setCartAdded(true);
    }
  }, [state, cartEmpty]);

  const handleQuantity = async (func, productID, quantity) => {
    setCartAdded(false);
    try {
      if (isLoggedIn) {
        if (func === "add") {
          setLoading(true);
          await axios.post(
            "https://plashoes-server.onrender.com/add-cart",
            {
              product_id: Number(productID),
              user_id: user ? user.id : 1,
              quantity: quantity,
            },
            {
              headers: {
                Authorization: accessToken,
              },
            }
          );
          setCartUpdate(true);
          setCartRefresh(true);
        } else {
          if (quantity > 1) {
            setLoading(true);
            await axios.patch(
              `https://plashoes-server.onrender.com/cart-update/${id}`,
              {
                quantity: quantity - 1,
              },
              {
                headers: {
                  Authorization: accessToken,
                },
              }
            );
          }
        }
      } else {
        const updatedItems = cartProducts.map((item) => {
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
      }
      setCartUpdate(true);
      setCartRefresh(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    setCartAdded(false);
    setLoading(true);
    try {
      if (isLoggedIn) {
        await axios.delete(
          `https://plashoes-server.onrender.com/cart-delete/${id}`,
          {
            headers: {
              Authorization: accessToken,
            },
          }
        );
      } else {
        const updatedItems = cartProducts.filter((item) => item.id !== id);
        setCookie("noLogCart", JSON.stringify(updatedItems), 7);
        setCartRefresh(true);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
    setCartUpdate(true);
    setCartRefresh(true);
  };

  const cartContextValue = {
    id,
    handleDelete,
    cartUpdated,
    setCartUpdate,
    handleQuantity,
  };

  return (
    <main className="cart-page">
      <CartPageContext.Provider value={cartContextValue}>
        <section className="cart-page-body">
          <h1>Cart</h1>
          {cartUpdated && !cartEmpty && <CartUpdate />}
          {cartAdded && <CartAdd shoe_name={state} />}
          {!isloading && cartEmpty ? <CartEmpty /> : <TableTotal />}
        </section>
      </CartPageContext.Provider>
    </main>
  );
};
export default CartPage;
