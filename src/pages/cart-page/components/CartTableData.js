import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SetQuantity from "../../../components/SetQuantity";
import ApiImage from "../../../components/ApiImage";
import { Link } from "react-router-dom";

const CartTableData = ({
  image,
  shoe_name,
  quantity,
  price,
  handleQuantity,
  product_id,
  id,
  handleDelete,
}) => {
  return (
    <tr>
      <td className="image-width table-image">
        <ApiImage imgPath={image} desc={shoe_name} />
      </td>
      <td className="product-width product">
        <Link to={`/product/${product_id}`}>{shoe_name}</Link>
      </td>
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
