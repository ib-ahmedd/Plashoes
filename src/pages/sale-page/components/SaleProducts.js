import ProductsSection from "../../../components/ProductsSection";
import useFetch from "../../../hooks/useFetch";

const SaleProducts = () => {
  const { products, isLoading } = useFetch("/sale");
  return (
    <section className="sale-products">
      <ProductsSection
        heading={"Last Pairs"}
        linkText={"VIEW ALL"}
        products={products}
        isLoading={isLoading}
      />
    </section>
  );
};
export default SaleProducts;
