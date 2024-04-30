import { useContext } from "react";
import CartTableMobile from "./CartTableMobile";
import { CartPageContext } from "../CartPage";
import { AppContext } from "../../../App";

const CartContentMobile = () => {
  const { cartProducts } = useContext(AppContext);
  const { handleQuantity, handleDelete } = useContext(CartPageContext);
  const cartContent =
    cartProducts &&
    cartProducts.map((item) => (
      <CartTableMobile
        key={item.id}
        {...item}
        handleQuantity={handleQuantity}
        handleDelete={handleDelete}
      />
    ));
  return <section className="cart-content-mobile">{cartContent}</section>;
};
export default CartContentMobile;
