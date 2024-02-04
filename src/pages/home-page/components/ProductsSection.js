import LoadingProductModal from "../../../components/LoadingProductModal";
import ProductModal from "../../../components/ProductModal";

const ProductsSection = ({ heading, linkText, products, isLoading }) => {
  let displayedProducts = [];
  const emptyArray = [1, 2, 3, 4, 5, 6];
  if (products) {
    displayedProducts = products.map((item) => (
      <ProductModal key={item.id} {...item} />
    ));
  }
  const loadingDisplayedProducts = emptyArray.map((item) => (
    <LoadingProductModal key={item} />
  ));
  return (
    <>
      <span>
        <h2>{heading}</h2>
        <a href="/">{linkText}</a>
      </span>
      <div className="products-container">
        {isLoading ? loadingDisplayedProducts : displayedProducts}
      </div>
    </>
  );
};

export default ProductsSection;
