import SaleImage from "./components/SaleImage";

import "../../assets/styles/sale-page/sale-style.css";
import "../../assets/styles/sale-page/sale-tab-style.css";
import "../../assets/styles/sale-page/sale-mobile-style.css";
import "../../assets/styles/sale-page/sale-laptop-style.css";
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
