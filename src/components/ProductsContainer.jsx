import LoadingProductModal from "./LoadingProductModal";
import ProductModal from "./ProductModal";
const ProductsContainer = ({ isLoading, products }) => {
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
    <div className="products-container">
      {isLoading ? loadingDisplayedProducts : displayedProducts}
    </div>
  );
};
export default ProductsContainer;
