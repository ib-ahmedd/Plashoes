import { useContext } from "react";
import Quantity from "./Quantity";
import { ProductPageContext } from "../ProductPage";
import Price from "../../../components/Price";
import ApiImage from "../../../components/ApiImage";

const FixedQuantity = ({ fixedQuantityOpen }) => {
  const { product } = useContext(ProductPageContext);
  const { image, shoename, price, sale } = product;
  return (
    <div
      className="fixed-quantity"
      style={{ transform: fixedQuantityOpen && "translateY(0)" }}
    >
      <span className="image-name">
        <ApiImage imgPath={image} desc={shoename} />
        <h4>{shoename}</h4>
      </span>
      <span className="price-quantity">
        <div className="price-cont">
          <Price price={price} sale={sale} />
        </div>
        <Quantity />
      </span>
    </div>
  );
};
export default FixedQuantity;
