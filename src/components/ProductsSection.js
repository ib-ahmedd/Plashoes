import ProductsContainer from "./ProductsContainer";
const ProductsSection = ({ heading, linkText, link, products, isLoading }) => {
  return (
    <>
      <span className="products-section">
        <h2>{heading}</h2>
        <a href={link}>{linkText}</a>
      </span>
      <ProductsContainer isLoading={isLoading} products={products} />
    </>
  );
};

export default ProductsSection;
