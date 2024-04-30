import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../../App";

const AddedToCart = ({ quantity, productName }) => {
  const { handleMouseDown } = useContext(AppContext);
  const [clicked, setClicked] = useState(false);
  return (
    <div className="added-to-cart">
      <span>
        <FontAwesomeIcon icon={faCircleCheck} className="cart-check-icon" />
        <p>
          {quantity} x "{productName}" {quantity > 1 ? "have" : "has"} been
          added to your cart.
        </p>
      </span>
      <NavLink
        to={"/cart"}
        onMouseDown={() => {
          handleMouseDown(setClicked);
        }}
        style={{ backgroundColor: clicked && "var(--clicked-green)" }}
      >
        VIEW CART
      </NavLink>
    </div>
  );
};
export default AddedToCart;
