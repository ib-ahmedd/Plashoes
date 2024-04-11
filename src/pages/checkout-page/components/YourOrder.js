import { useContext } from "react";
import OrderModal from "./OrderModal";
import { AppContext } from "../../../App";

const YourOrder = () => {
  const { cartProducts, payedOrders } = useContext(AppContext);
  return (
    <section className="your-order">
      <h2>Your order</h2>
      <OrderModal items={payedOrders.length > 0 ? payedOrders : cartProducts} />
    </section>
  );
};
export default YourOrder;
