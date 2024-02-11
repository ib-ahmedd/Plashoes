import { Link } from "react-router-dom";

const LoadedCartBtns = () => {
  return (
    <div className="loaded-cart">
      <span>
        <p>Subtotal:</p>
        <p className="price">{"$69.00"}</p>
      </span>
      <Link to={"/cart"}>VIEW CART</Link>
      <Link to={"/cart"}>CHECKOUT</Link>
    </div>
  );
};
export default LoadedCartBtns;
