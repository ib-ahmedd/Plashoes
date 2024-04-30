import ApiImage from "../../../components/ApiImage";

const ItemDetail = ({ shoe_name, image, price, quantity }) => {
  const subtotal = (price * quantity).toFixed(2);
  return (
    <span className="item-detail">
      <span>
        <ApiImage imgPath={image} desc={shoe_name} />
        <p>
          {shoe_name} x {quantity}
        </p>
      </span>
      <p>${subtotal}</p>
    </span>
  );
};
export default ItemDetail;
