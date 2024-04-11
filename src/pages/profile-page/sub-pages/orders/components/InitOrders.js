import LoadingOrderInfo from "./LoadingOrderInfo";
import OrderInfo from "./OrderInfo";
const InitOrders = ({ orders, loading }) => {
  const ordersDisplay = orders.map((item) => {
    return (
      <OrderInfo key={item.id} {...item} link={`/product/${item.product_id}`} />
    );
  });
  return (
    <div className="init-orders">
      {loading ? <LoadingOrderInfo /> : ordersDisplay}
    </div>
  );
};
export default InitOrders;
