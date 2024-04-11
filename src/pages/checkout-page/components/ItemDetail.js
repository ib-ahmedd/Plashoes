const ItemDetail = ({ shoe_name, image, price, quantity }) => {
  const subtotal = (price * quantity).toFixed(2);
  return (
    <span className="item-detail">
      <span>
        <img src={image} alt={shoe_name} />
        <p>
          {shoe_name} x {quantity}
        </p>
      </span>
      <p>${subtotal}</p>
    </span>
  );
};
export default ItemDetail;
