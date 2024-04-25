import ProductsSection from "../../../components/ProductsSection";
import useFetch from "../../../hooks/useFetch";

const NewArrivals = () => {
  const { products, isLoading } = useFetch("/new-arrived");

  return (
    <section className="new-arrivals">
      <ProductsSection
        heading={"New Arrivals"}
        linkText={"VIEW ALL NEW ARRIVALS"}
        products={products}
        link={"/collection"}
        state={"latest"}
        isLoading={isLoading}
      />
    </section>
  );
};
export default NewArrivals;
