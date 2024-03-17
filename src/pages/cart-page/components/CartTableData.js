import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SetQuantity from "../../../components/SetQuantity";

const CartTableData = ({
  image,
  shoe_name,
  quantity,
  price,
  handleQuantity,
  id,
  handleDelete,
}) => {
  return (
    <tr>
      <td className="image-width table-image">
        <img src={image} alt={shoe_name} />
      </td>
      <td className="product-width product">{shoe_name}</td>
      <td className="price-width">${price}</td>
      <td className="quantity-width">
        <SetQuantity
          quantity={quantity}
          handleQuantity={handleQuantity}
          id={id}
        />
      </td>
      <td className="subtotal-width subtotal">
        <span>
          ${(price * quantity).toFixed(2)}
          <button
            onClick={() => {
              handleDelete(id);
            }}
          >
            <FontAwesomeIcon icon={faCircleXmark} className="xmark" />
          </button>
        </span>
      </td>
    </tr>
  );
};
export default CartTableData;
