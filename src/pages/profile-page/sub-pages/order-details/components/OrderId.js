const OrderId = ({ orderDetails }) => {
  const { id, quantity, date_ordered, totalprice } = orderDetails;
  return (
    <article className="order-id">
      <h2 style={{ fontWeight: "bold" }}>Order #{id}</h2>
      <p>{quantity} Items</p>
      <p>Placed on {date_ordered}</p>
      <p>Total ${totalprice}</p>
    </article>
  );
};
export default OrderId;
