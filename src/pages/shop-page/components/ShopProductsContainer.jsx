import ResultPages from "./ResultPages";
import LoadingProductModal from "../../../components/LoadingProductModal";
import ProductModal from "../../../components/ProductModal";
import NoResult from "./NoResult";
const ProductsContainer = ({ isLoading, products, count }) => {
  const emptyArray = [1, 2, 3, 4, 5, 6];
  const displayedProducts = products.map((item) => (
    <ProductModal key={item.id} {...item} />
  ));
  const loadingDisplayedProducts = emptyArray.map((item) => (
    <LoadingProductModal key={item} />
  ));
  return (
    <div className="products-container">
      {isLoading ? loadingDisplayedProducts : displayedProducts}
      {count === 0 && <NoResult />}
      {count > 12 && <ResultPages count={count} />}
    </div>
  );
};
export default ProductsContainer;
