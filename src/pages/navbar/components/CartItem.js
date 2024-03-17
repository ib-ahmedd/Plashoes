import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "../../../components/Image";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import SetQuantity from "../../../components/SetQuantity";

const CartItem = ({
  image,
  shoe_name,
  quantity,
  price,
  id,
  handleDelete,
  handleQuantity,
}) => {
  const totalItemPrice = quantity * price;
  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <Image source={image} alter={shoe_name} />
        <span>
          <p>{shoe_name}</p>
          <SetQuantity
            quantity={quantity}
            handleQuantity={handleQuantity}
            id={id}
          />
        </span>
      </div>
      <div className="cart-item-right">
        <button
          onClick={() => {
            handleDelete(id);
          }}
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        <p>${totalItemPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};
export default CartItem;
