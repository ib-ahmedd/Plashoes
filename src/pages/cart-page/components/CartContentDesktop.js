import { useContext } from "react";
import CartTableData from "./CartTableData";
import { CartPageContext } from "../CartPage";
import { AppContext } from "../../../App";

const CartContentDesktop = () => {
  const { cartProducts } = useContext(AppContext);
  const { handleQuantity, handleDelete } = useContext(CartPageContext);
  const cartContent =
    cartProducts &&
    cartProducts.map((item) => (
      <CartTableData
        key={item.id}
        {...item}
        handleQuantity={handleQuantity}
        handleDelete={handleDelete}
      />
    ));
  return (
    <table className="cart-content-table">
      <thead>
        <tr className="heading">
          <th className="image-width "></th>
          <th className="product-width ">Product</th>
          <th className="price-width">Price</th>
          <th className="quantity-width">Quantity</th>
          <th className="subtotal-width">Subtotal</th>
        </tr>
      </thead>
      <tbody>{cartContent}</tbody>
    </table>
  );
};
export default CartContentDesktop;
