import ProductsSection from "./ProductsSection";
import useFetch from "../../../hooks/useFetch";

const NewArrivals = () => {
  const { products, isLoading } = useFetch("http://localhost:5000/new-arrived");

  return (
    <section className="new-arrivals">
      <ProductsSection
        heading={"New Arrivals"}
        linkText={"VIEW ALL NEW ARRIVALS"}
        products={products}
        isLoading={isLoading}
      />
    </section>
  );
};
export default NewArrivals;
