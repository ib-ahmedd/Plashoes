import { useContext } from "react";
import CartItem from "./CartItem";
import { CartIconContext } from "../Cart";
import { AppContext } from "../../../../App";
import LoadingItems from "./LoadingItems";

const CartContent = () => {
  const { handleDelete, handleQuantity } = useContext(CartIconContext);
  const { cartProducts, cartLoading } = useContext(AppContext);

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
  return (
    <div className="cart-content">
      {!cartLoading ? cartContent : <LoadingItems />}
    </div>
  );
};
export default CartContent;
