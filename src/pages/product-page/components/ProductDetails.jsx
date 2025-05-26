import ProductPaymentMethods from "./ProductPaymentMethods";
import FixedQuantity from "./FixedQuantity";
import Quantity from "./Quantity";
import { useCallback, useContext, useEffect, useState } from "react";
import { ProductPageContext } from "../ProductPage";
import Price from "../../../components/Price";
import SaleModal from "../../../components/SaleModal";
import ApiImage from "../../../components/ApiImage";

const ProductDetails = () => {
  const { product } = useContext(ProductPageContext);
  const {
    Product_name,
    Price: price,
    Image,
    Gender,
    Free_shipping,
    Categories,
    Sale,
  } = product;

  const [fixedQuantityOpen, setFixedQuantityOpen] = useState(false);
  const [quantityOnScreen, setQuantityOnScreen] = useState(false);

  useEffect(() => {
    setQuantityOnScreen(false);
  }, [product]);

  const getInView = useCallback(
    (onscreen) => {
      if (onscreen) {
        setFixedQuantityOpen(false);
        setQuantityOnScreen(true);
      } else {
        setFixedQuantityOpen(quantityOnScreen && true);
      }
    },
    [quantityOnScreen]
  );
  return (
    <section className="product-details">
      <span className="image-sale-cont">
        {Sale && <SaleModal />}
        <ApiImage imgPath={Image} desc={Product_name} />
      </span>
      <div className="details">
        <p className="gender-categ">
          {Gender}, {Categories}
        </p>
        <h1 className="shoe-name">{Product_name}</h1>
        <span className="price-cont">
          <Price price={price} sale={Sale} />
          {Free_shipping && (
            <p className="free-shipping">{"& Free shipping"}</p>
          )}
        </span>
        <p className="short-desc">
          Auctor eros suspendisse tellus venenatis sodales purus non
          pellentesque amet, nunc sit eu, enim fringilla egestas pulvinar odio
          feugiat consectetur egestas magna pharetra cursus risus, lectus enim
          eget eu et lobortis faucibus.
        </p>
        <Quantity getInView={getInView} />
        <p className="categ">
          Categories: {Gender}, {Categories}
        </p>
        <ProductPaymentMethods />
        <FixedQuantity fixedQuantityOpen={fixedQuantityOpen} />
      </div>
    </section>
  );
};
export default ProductDetails;
