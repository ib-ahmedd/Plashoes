import ProductsContainer from "../../../components/ProductsContainer";
import { useContext } from "react";
import { ProductPageContext } from "../ProductPage";

const RelatedProducts = () => {
  const { relatedProducts } = useContext(ProductPageContext);
  const products = relatedProducts;
  return (
    <section className="related-products">
      <h2>Related products</h2>
      <ProductsContainer isLoading={false} products={products} />
    </section>
  );
};
export default RelatedProducts;
