import { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ProductPageContext } from "../ProductPage";
import SetQuantity from "../../../components/SetQuantity";
import { AppContext } from "../../../App";

const Quantity = ({ getInView }) => {
  const { ref, inView } = useInView();
  const { isLoggedIn, handleMouseDown } = useContext(AppContext);
  const {
    quantity,
    handleQuantity,
    handleAddCart,
    handleNoLogCart,
    disabledBtn,
  } = useContext(ProductPageContext);

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (getInView) {
      getInView(inView);
    }
  }, [inView, getInView]);

  return (
    <span className="quantity-add-cart" ref={ref}>
      <SetQuantity handleQuantity={handleQuantity} quantity={quantity} />
      {!disabledBtn ? (
        <button
          className="add-cart"
          onClick={isLoggedIn ? handleAddCart : handleNoLogCart}
          onMouseDown={() => {
            handleMouseDown(setClicked);
          }}
          style={{ backgroundColor: clicked && "var(--clicked-green)" }}
        >
          ADD TO CART
        </button>
      ) : (
        <button
          disabled
          className="add-cart"
          style={{ backgroundColor: "var(--grey)" }}
        >
          ADD TO CART
        </button>
      )}
    </span>
  );
};
export default Quantity;
