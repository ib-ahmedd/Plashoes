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
    product_name,
    price,
    image,
    gender,
    free_shipping,
    categories,
    sale,
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
        {sale && <SaleModal />}
        <ApiImage imgPath={image} desc={product_name} />
      </span>
      <div className="details">
        <p className="gender-categ">
          {gender}, {categories}
        </p>
        <h1 className="shoe-name">{product_name}</h1>
        <span className="price-cont">
          <Price price={price} sale={sale} />
          {free_shipping && (
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
          Categories: {gender}, {categories}
        </p>
        <ProductPaymentMethods />
        <FixedQuantity fixedQuantityOpen={fixedQuantityOpen} />
      </div>
    </section>
  );
};
export default ProductDetails;
