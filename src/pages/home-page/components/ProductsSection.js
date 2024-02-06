import ProductsContainer from "../../../components/ProductsContainer";
const ProductsSection = ({ heading, linkText, products, isLoading }) => {
  return (
    <>
      <span>
        <h2>{heading}</h2>
        <a href="/">{linkText}</a>
      </span>
      <ProductsContainer isLoading={isLoading} products={products} />
    </>
  );
};

export default ProductsSection;
