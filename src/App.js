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
import "./assets/styles/home-page/home-laptop-style.css";
import { createContext, useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";
import LoginPage from "./pages/signup-login-pages/LoginPage";
import SignupPage from "./pages/signup-login-pages/SignupPage";
import CartPage from "./pages/cart-page/CartPage";
import axios from "axios";
import NetworkErrPopUp from "./components/NetworkErrPopUp";
import Checkout from "./pages/checkout-page/Checkout";

export const AppContext = createContext("");

function App() {
  const { pathname } = useLocation();
  const [appLoaded, setAppLoaded] = useState(false);
  const [user, setUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartEmpty, setCartEmpty] = useState(true);
  const [cartRefresh, setCartRefresh] = useState(true);
  const [cartProducts, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [newtworkErr, setNetworkerr] = useState(false);
  const [noLogCart, setNoLogCart] = useState([]);
  const [accessToken, setAccessToken] = useState({});
  const [searchKey, setSearchKey] = useState("");
  const [payedOrders, setPayedOrders] = useState([]);
  const host = "http://localhost:5000/";

  const getCartProducts = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/cart/${user.id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const result = response.data.productsArray;
      setProducts(result);
      setLoading(false);
      if (result && result.length > 0) {
        setCartEmpty(false);
      } else {
        setCartEmpty(true);
      }
    } catch (err) {
      console.log(err);
    }
  }, [user.id, accessToken]);

  function handleNetworkErr() {
    setNetworkerr(true);
    setTimeout(() => {
      setNetworkerr(false);
    }, 3000);
  }

  function setCookie(name, value, expires) {
    Cookies.set(name, value, { expires: expires, path: "/" });
  }

  function getCookie(name) {
    return Cookies.get(name);
  }

  function deleteCookie(name) {
    Cookies.remove(name, { path: "/" });
  }

  function setRecentProducts(product) {
    const inSetProducts = getCookie(`${user.id}recent_products`);
    const parsedProducts = inSetProducts ? JSON.parse(inSetProducts) : [];
    const foundProductIndex = parsedProducts.findIndex(
      (item) => item.id === product.id
    );
    if (foundProductIndex > -1) {
      parsedProducts.splice(foundProductIndex, 1);
    }
    if (parsedProducts.length < 12) {
      const newProducts = [
        {
          id: product.id,
          shoename: product.shoename,
          image: product.image,
          price: product.price,
          sale: product.sale,
          rating: product.rating,
        },
        ...parsedProducts,
      ];
      setCookie(`${user.id}recent_products`, JSON.stringify(newProducts), 7);
    } else {
      parsedProducts.pop();
      const newProducts = [
        {
          id: product.id,
          shoename: product.shoename,
          image: product.image,
          price: product.price,
          sale: product.sale,
          rating: product.rating,
        },
        ...parsedProducts,
      ];
      setCookie(`${user.id}recent_products`, JSON.stringify(newProducts), 7);
    }
    // deleteCookie(`${user.id}recent_products`);
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.classList.remove("no-scroll");
    setCartOpen(false);
    setPayedOrders([]);

    const localStorageUser = localStorage.getItem("user");
    if (localStorageUser) {
      const { userInfo, accessToken } = JSON.parse(localStorageUser);
      setUser(userInfo);
      setAccessToken(accessToken);
      setLoggedIn(true);
    } else {
      setUser({});
    }
  }, [pathname]);

  useEffect(() => {
    if (isLoggedIn) {
      getCartProducts();
      deleteCookie("noLogCart");
    } else {
      const rawCookie = getCookie("noLogCart");
      const productsCookie = rawCookie ? JSON.parse(rawCookie) : [];
      setProducts(productsCookie);
    }
    setAppLoaded(true);
  }, [cartRefresh, getCartProducts, isLoggedIn, accessToken]);

  const AppContextValue = {
    appLoaded,
    isLoggedIn,
    setLoggedIn,
    setUser,
    user,
    noLogCart,
    setNoLogCart,
    cartOpen,
    setCartOpen,
    cartEmpty,
    setCartEmpty,
    cartRefresh,
    setCartRefresh,
    cartProducts,
    setProducts,
    getCartProducts,
    isLoading,
    setLoading,
    newtworkErr,
    handleNetworkErr,
    setCookie,
    getCookie,
    deleteCookie,
    accessToken,
    setAccessToken,
    searchKey,
    setSearchKey,
    payedOrders,
    setPayedOrders,
    host,
    setRecentProducts,
  };
  return (
    <>
      <AppContext.Provider value={AppContextValue}>
        <NavBar />
        <SearchBar />
        <div className="app-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop-men" element={<ShopPage page={"Men"} />} />
            <Route path="/shop-women" element={<ShopPage page={"Women"} />} />
            <Route path="/collection" element={<ShopPage page={"Shop"} />} />
            <Route path="/search" element={<ShopPage page={"Search"} />} />
            <Route path="/sale-shop" element={<ShopPage page={"Sale"} />} />
            <Route path="/lookbook" element={<Lookbook />} />
            <Route path="/our-story" element={<OurStoryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/sale" element={<SalePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/profile/*" element={<ProfilePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h2>Not found</h2>} />
          </Routes>
        </div>
        <Footer />
        <NetworkErrPopUp />
      </AppContext.Provider>
    </>
  );
}

export default App;
