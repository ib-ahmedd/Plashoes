import useFetch from "../../../hooks/useFetch";
import ProductsSection from "./ProductsSection";

const BestSellers = () => {
  const { products, isLoading } = useFetch("/bestsellers");

  return (
    <section className="best-sellers">
      <ProductsSection
        heading={"Our Best Seller"}
        linkText={"VIEW ALL BEST SELLERS"}
        products={products}
        isLoading={isLoading}
      />
    </section>
  );
};

export default BestSellers;
