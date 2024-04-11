import CartUpdate from "./components/CartUpdate";
import { createContext, useContext, useState } from "react";
import { AppContext } from "../../App";

import "../../assets/styles/cart-page/cart-style.css";
import "../../assets/styles/cart-page/cart-tab-style.css";
import "../../assets/styles/cart-page/cart-mobile-style.css";
import "../../assets/styles/cart-page/cart-tab-style.css";
import "../../assets/styles/cart-page/cart-laptop-style.css";
import TableTotal from "./components/TableTotal";
import axios from "axios";
import CartEmpty from "./components/CartEmpty";

export const CartPageContext = createContext("");

const CartPage = () => {
  const { user, cartEmpty, setLoading, setCartRefresh, accessToken } =
    useContext(AppContext);
  const { id } = user;
  const [cartUpdated, setCartUpdate] = useState(false);

  const handleQuantity = async (func, id, quantity) => {
    setLoading(true);
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
    setCartUpdate(true);
    setCartRefresh(true);
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`http://localhost:5000/cart-delete/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
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
          {cartEmpty && <CartEmpty />}
          <TableTotal />
        </section>
      </CartPageContext.Provider>
    </main>
  );
};
export default CartPage;
