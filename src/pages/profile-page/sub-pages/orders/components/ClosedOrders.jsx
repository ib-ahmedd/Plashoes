import LoadingOrderInfo from "./LoadingOrderInfo";
import OrderInfo from "./OrderInfo";

const ClosedOrders = ({ orders, loading }) => {
  const ordersDisplay = orders.map((item) => (
    <OrderInfo key={item.id} {...item} link={`/product/${item.product_id}`} />
  ));
  return (
    <div className="closed-orders">
      {loading ? <LoadingOrderInfo /> : ordersDisplay}
    </div>
  );
};
export default ClosedOrders;
