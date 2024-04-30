import ItemDetail from "./ItemDetail";

const OrderModal = ({ items }) => {
  const products =
    items && items.map((item) => <ItemDetail key={item.id} {...item} />);

  let subtotal = 0;
  items &&
    items.forEach((item) => {
      subtotal = subtotal + parseFloat(item.price) * item.quantity;
    });
  return (
    <article className="order-modal">
      <span>
        <h3>Product</h3>
        <h3>Subtotal</h3>
      </span>
      {products}
      <span>
        <p>Subtotal</p>
        <p>${subtotal.toFixed(2)}</p>
      </span>
      <span>
        <p>Total</p>
        <p>${subtotal.toFixed(2)}</p>
      </span>
    </article>
  );
};
export default OrderModal;
