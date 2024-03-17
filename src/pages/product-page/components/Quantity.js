import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ProductPageContext } from "../ProductPage";
import SetQuantity from "../../../components/SetQuantity";

const Quantity = ({ getInView }) => {
  const { ref, inView } = useInView();
  const { quantity, handleQuantity, handleAddCart } =
    useContext(ProductPageContext);
  useEffect(() => {
    if (getInView) {
      getInView(inView);
    }
  }, [inView, getInView]);

  return (
    <span className="quantity-add-cart" ref={ref}>
      <SetQuantity handleQuantity={handleQuantity} quantity={quantity} />
      <button className="add-cart" onClick={handleAddCart}>
        ADD TO CART
      </button>
    </span>
  );
};
export default Quantity;
