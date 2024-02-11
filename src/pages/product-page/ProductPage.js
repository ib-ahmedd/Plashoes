import "../../assets/styles/product-page/product-style.css";
import "../../assets/styles/product-page/product-tab-style.css";
import "../../assets/styles/product-page/product-mobile-style.css";

import { useLocation, useParams } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import DescReview from "./components/DescReview";
import RelatedProducts from "./components/RelatedProducts";
import useFetch from "../../hooks/useFetch";
import { createContext, useEffect, useState } from "react";
import LoadingProductSection from "./components/LoadingProductSection";

export const ProductPageContext = createContext("");

const ProductPage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  const { id } = useParams();
  const { products, isLoading } = useFetch(`/product/${id}`);
  const [displayedProduct, relatedProducts] = products;
  const [quantity, setQuantity] = useState(1);

  const ProductPageContextValues = {
    product: displayedProduct ? displayedProduct : {},
    relatedProducts,
    quantity,
    setQuantity,
  };

  return (
    <main className="product-page">
      <ProductPageContext.Provider value={ProductPageContextValues}>
        {isLoading ? (
          <LoadingProductSection />
        ) : (
          <section className="product-section">
            <ProductDetails />
            <DescReview />
            <RelatedProducts />
          </section>
        )}
      </ProductPageContext.Provider>
    </main>
  );
};
export default ProductPage;
