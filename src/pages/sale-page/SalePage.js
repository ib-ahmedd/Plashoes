import SaleImage from "./components/SaleImage";

import "../../assets/styles/sale-page/sale-style.css";
import "../../assets/styles/sale-page/sale-tab-style.css";
import "../../assets/styles/sale-page/sale-mobile-style.css";
// import ProductsSection from "../../components/ProductsSection";
// import useFetch from "../../hooks/useFetch";
import SaleProducts from "./components/SaleProducts";

const SalePage = () => {
  return (
    <main className="sale-page">
      <h1>Sale</h1>
      <SaleImage />
      <SaleProducts />
    </main>
  );
};
export default SalePage;
