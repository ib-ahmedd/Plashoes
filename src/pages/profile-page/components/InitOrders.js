import OrderInfo from "./OrderInfo";
const InitOrders = ({ orders }) => {
  const ordersDisplay = orders.map((item) => {
    return (
      <OrderInfo
        key={item.id}
        {...item}
        alter={item.productName}
        link={`/product/${item.id}`}
      />
    );
  });
  return <div className="init-orders">{ordersDisplay}</div>;
};
export default InitOrders;
