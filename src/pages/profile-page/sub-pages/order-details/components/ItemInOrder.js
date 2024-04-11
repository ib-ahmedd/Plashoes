const ItemsInOrder = ({ orderDetails }) => {
  const { order_status, date_ordered, quantity, shoe_name, price, image } =
    orderDetails;
  return (
    <article className="items-in-order">
      <div className="left">
        <p className="status">{order_status}</p>
        <p className="date">On {date_ordered}</p>
        <span className="outer-span">
          <div className="image">
            <img src={"http://localhost:5000/" + image} alt={shoe_name} />
          </div>
          <span className="inner-span">
            <h3>{shoe_name}</h3>
            <p className="qty">QTY: {quantity}</p>
            <p className="price">Price: ${price}</p>
          </span>
        </span>
      </div>
      <div className="right">
        <button className="buy">BUY AGAIN</button>
        <button className="view">VIEW PRODUCT</button>
      </div>
    </article>
  );
};
export default ItemsInOrder;
