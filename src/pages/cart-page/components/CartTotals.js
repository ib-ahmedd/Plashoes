import { useContext } from "react";
import { AppContext } from "../../../App";

const CartTotals = () => {
  const { cartProducts } = useContext(AppContext);
  let total = 0;
  cartProducts &&
    cartProducts.forEach((item) => {
      total = total + parseFloat(item.price) * parseFloat(item.quantity);
    });

  return (
    <section className="cart-totals">
      <h2>Cart totals</h2>
      <div className="cart-totals-body">
        <div className="cart-totals-spans">
          <span>
            <p>Subtotal</p> <p>${total.toFixed(2)}</p>
          </span>
          <span>
            <p>Total</p> <p>${total.toFixed(2)}</p>
          </span>
        </div>
        <button className="checkout-btn">PROCEED TO CHECKOUT</button>
      </div>
    </section>
  );
};
export default CartTotals;
