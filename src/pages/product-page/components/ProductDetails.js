import ProductPaymentMethods from "./ProductPaymentMethods";
import Image from "../../../components/Image";
import FixedQuantity from "./FixedQuantity";
import Quantity from "./Quantity";
import { useCallback, useContext, useEffect, useState } from "react";
import { ProductPageContext } from "../ProductPage";
import Price from "../../../components/Price";
import SaleModal from "../../../components/SaleModal";

const ProductDetails = () => {
  const { product } = useContext(ProductPageContext);
  const {
    shoename,
    price,
    image,
    gender,
    free_shipping,
    categories,
    product_detail,
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
        <Image source={image} alter={shoename} />
      </span>
      <div className="details">
        <p className="gender-categ">
          {gender}, {categories}
        </p>
        <h1 className="shoe-name">{shoename}</h1>
        <span className="price-cont">
          <Price price={price} sale={sale} />
          {free_shipping && (
            <p className="free-shipping">{"& Free shipping"}</p>
          )}
        </span>
        <p className="short-desc">{product_detail}</p>
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
