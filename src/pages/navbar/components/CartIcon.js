import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartIcon = ({ icon }) => {
  return (
    <div className="cart-icon">
      <a href="/">
        <FontAwesomeIcon icon={icon} />
      </a>
    </div>
  );
};

export default CartIcon;
