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
import ProfilePage from "./pages/profile-page/ProfilePage";

import { Route, Routes, useLocation } from "react-router-dom";

import "./assets/styles/home-page/home-style.css";
import "./assets/styles/home-page/home-tab-style.css";
import "./assets/styles/home-page/home-mobile-style.css";
import { createContext, useEffect, useState } from "react";
import LoginPage from "./pages/signup-login-pages/LoginPage";
import SignupPage from "./pages/signup-login-pages/SignupPage";

export const LoginContext = createContext("");

function App() {
  const { pathname } = useLocation();
  const [user, setUser] = useState({});
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const [isLoggedIn, setLoggedIn] = useState(false);
  const handleLogin = (data) => {
    setLoggedIn(true);
    setUser(data);
  };

  const LoginContextValue = {
    isLoggedIn,
    handleLogin,
    user,
  };
  return (
    <>
      <LoginContext.Provider value={LoginContextValue}>
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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/profile/*" element={<ProfilePage />} />
          <Route path="*" element={<h2>Not found</h2>} />
        </Routes>
        <Footer />
      </LoginContext.Provider>
    </>
  );
}

export default App;
