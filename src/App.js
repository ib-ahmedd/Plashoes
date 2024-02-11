import NavBar from "./pages/navbar/NavBar";
import HomePage from "./pages/home-page/HomePage";
import ShopPage from "./pages/shop-page/ShopPage";
import OurStoryPage from "./pages/our-story-page/OurStoryPage";
import ContactPage from "./pages/contact-page/ContactPage";
import SalePage from "./pages/sale-page/SalePage";
import Lookbook from "./pages/lookbook/Lookbook";
import Footer from "./pages/footer/Footer";
import SearchBar from "./pages/navbar/SearchBar";
import ProductPage from "./pages/product-page/ProductPage";

import { Route, Routes, useLocation } from "react-router-dom";

import "./assets/styles/home-page/home-style.css";
import "./assets/styles/home-page/home-tab-style.css";
import "./assets/styles/home-page/home-mobile-style.css";
import { useEffect } from "react";
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <>
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop-men" element={<ShopPage page={"Men"} />} />
        <Route path="/shop-women" element={<ShopPage page={"Women"} />} />
        <Route path="/collection" element={<ShopPage page={"Shop"} />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<h2>Not found</h2>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
