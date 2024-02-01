import ProductModal from "../../../components/ProductModal";
import demoShoeData from "../../../arrays/demoShoeData";
import ProductsSection from "./ProductsSection";

const NewArrivals = () => {
  const displayedProducts = demoShoeData.map((item) => (
    <ProductModal key={item.id} {...item} />
  ));
  return (
    <section className="new-arrivals">
      <ProductsSection
        heading={"New Arrivals"}
        linkText={"VIEW ALL NEW ARRIVALS"}
        displayedProducts={displayedProducts}
      />
    </section>
  );
};
export default NewArrivals;
