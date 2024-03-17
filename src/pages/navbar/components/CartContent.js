import { useContext, useEffect } from "react";
import CartItem from "./CartItem";
import { CartIconContext } from "./Cart";
import { AppContext } from "../../../App";

const CartContent = () => {
  const { handleDelete, handleQuantity } = useContext(CartIconContext);
  const { cartProducts, setCartRefresh, cartRefresh } = useContext(AppContext);
  useEffect(() => {
    setCartRefresh(false);
  }, [cartRefresh, setCartRefresh]);

  const cartContent =
    cartProducts &&
    cartProducts.map((item) => (
      <CartItem
        key={item.id}
        {...item}
        handleDelete={handleDelete}
        handleQuantity={handleQuantity}
      />
    ));
  return <div className="cart-content">{cartContent}</div>;
};
export default CartContent;
