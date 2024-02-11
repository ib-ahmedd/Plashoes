import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "../../../components/Image";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import SetQuantity from "../../../components/SetQuantity";
import { useState } from "react";
const CartItem = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <Image
          source={"./images/demo-shoes-images/men/men black running.jpg"}
          alter={"shoe"}
        />
        <span>
          <p>{"Men's Classic Blue"}</p>
          <SetQuantity quantity={quantity} setQuantity={setQuantity} />
        </span>
      </div>
      <div className="cart-item-right">
        <span>
          <FontAwesomeIcon icon={faCircleXmark} />
        </span>
        <p>{"$69.00"}</p>
      </div>
    </div>
  );
};
export default CartItem;
