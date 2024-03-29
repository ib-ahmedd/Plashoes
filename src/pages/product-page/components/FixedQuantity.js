import { useContext } from "react";
import Quantity from "./Quantity";
import { ProductPageContext } from "../ProductPage";
import Price from "../../../components/Price";

const FixedQuantity = ({ fixedQuantityOpen }) => {
  const { product } = useContext(ProductPageContext);
  const { image, shoename, price, sale } = product;
  return (
    <div
      className="fixed-quantity"
      style={{ transform: fixedQuantityOpen && "translateY(0)" }}
    >
      <span className="image-name">
        <img src={image} alt={shoename} />
        <h4>{shoename}</h4>
      </span>
      <span className="price-quantity">
        <p className="price-cont">
          <Price price={price} sale={sale} />
        </p>
        <Quantity />
      </span>
    </div>
  );
};
export default FixedQuantity;
