import ProductModal from "../../../components/ProductModal";
import demoShoeData from "../../../arrays/demoShoeData";
import ProductsSection from "./ProductsSection";

const BestSellers = () => {
  const displayedProducts = demoShoeData.map((item) => (
    <ProductModal key={item.id} {...item} />
  ));
  return (
    <section className="best-sellers">
      <ProductsSection
        heading={"Our Best Seller"}
        linkText={"VIEW ALL BEST SELLERS"}
        displayedProducts={displayedProducts}
      />
    </section>
  );
};

export default BestSellers;
