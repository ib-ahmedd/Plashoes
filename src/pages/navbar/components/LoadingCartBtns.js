import { Link } from "react-router-dom";

const LoadedCartBtns = ({ totalPrice }) => {
  return (
    <div className="loaded-cart">
      <span>
        <p>Subtotal:</p>
        <p className="price">${totalPrice}</p>
      </span>
      <Link to={"/cart"}>VIEW CART</Link>
      <Link to={"/cart"}>CHECKOUT</Link>
    </div>
  );
};
export default LoadedCartBtns;
