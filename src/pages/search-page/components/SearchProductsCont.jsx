import LoadingProductModal from "../../../components/LoadingProductModal";
import ProductModal from "../../../components/ProductModal";
import NoResult from "./NoResult";
import SearchResultPages from "./SearchResultPages";

const SearchProductsCont = ({ isLoading, count, products }) => {
  const emptyArray = [1, 2, 3, 4, 5, 6];
  const displayedProducts = products.map((item) => (
    <ProductModal key={item.id} {...item} />
  ));
  const loadingDisplayedProducts = emptyArray.map((item) => (
    <LoadingProductModal key={item} />
  ));
  return (
    <section className="products-container">
      {isLoading ? loadingDisplayedProducts : displayedProducts}
      {!isLoading && count === 0 && <NoResult />}
      {count > 12 && <SearchResultPages count={count} />}
    </section>
  );
};
export default SearchProductsCont;
