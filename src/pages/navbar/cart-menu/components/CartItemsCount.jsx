import { useContext } from "react";
import { AppContext } from "../../../../App";

const CartItemsCount = () => {
  let cartQuantity = 0;
  const { cartProducts } = useContext(AppContext);
  if (cartProducts) {
    cartProducts.forEach((item) => {
      cartQuantity = cartQuantity + item.quantity;
    });
  }
  return <div className="cart-items-count">{cartQuantity}</div>;
};
export default CartItemsCount;
