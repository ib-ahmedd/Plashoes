import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className="cart-empty">
      <article className="cart-page-update">
        <p>Your cart is empty</p>
      </article>
      <Link to={"/collection"} className="return-to-shop">
        RETURN TO SHOP
      </Link>
    </div>
  );
};
export default CartEmpty;
