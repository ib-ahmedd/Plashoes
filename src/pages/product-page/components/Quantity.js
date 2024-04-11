import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ProductPageContext } from "../ProductPage";
import SetQuantity from "../../../components/SetQuantity";
import { AppContext } from "../../../App";

const Quantity = ({ getInView }) => {
  const { ref, inView } = useInView();
  const { isLoggedIn } = useContext(AppContext);
  const {
    quantity,
    handleQuantity,
    handleAddCart,
    handleNoLogCart,
    disabledBtn,
  } = useContext(ProductPageContext);
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
