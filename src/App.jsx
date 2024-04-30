//--------------------------------------------------------------------------------------------
//---------------------site components--------------------------------------------------------
//--------------------------------------------------------------------------------------------
import NavBar from "./pages/navbar/NavBar";
import HomePage from "./pages/home-page/HomePage";
import ShopPage from "./pages/shop-page/ShopPage";
import OurStoryPage from "./pages/our-story-page/OurStoryPage";
import ContactPage from "./pages/contact-page/ContactPage";
import SalePage from "./pages/sale-page/SalePage";
import Lookbook from "./pages/lookbook/Lookbook";
import Footer from "./pages/footer/Footer";
import ProductPage from "./pages/product-page/ProductPage";
import ProfilePage from "./pages/profile-page/ProfilePage";
import NetworkErrPopUp from "./components/NetworkErrPopUp";
import Checkout from "./pages/checkout-page/Checkout";
import ForgotPasswordPage from "./pages/signup-login-pages/Reset-password/ForgotPasswordPage";
import TermsAndConditions from "./pages/Ts-and-Cs-page/TermsAndConditions";
import LoginPage from "./pages/signup-login-pages/login-page/LoginPage";
import SignupPage from "./pages/signup-login-pages/signup-page/SignupPage";
import CartPage from "./pages/cart-page/CartPage";
//--------------------------------------------------------------------------------------------
//---------------------site components--------------------------------------------------------
//--------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------
//---------------------packages---------------------------------------------------------------
//--------------------------------------------------------------------------------------------
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { createContext, useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
//--------------------------------------------------------------------------------------------
//---------------------packages---------------------------------------------------------------
//--------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------------------
//---------------------site styling-----------------------------------------------------------
//--------------------------------------------------------------------------------------------
import "./assets/styles/home-page/home-style.css";
import "./assets/styles/home-page/home-tab-style.css";
import "./assets/styles/home-page/home-mobile-style.css";
import "./assets/styles/home-page/home-laptop-style.css";
import SearchPage from "./pages/search-page/SearchPage";
import NotFound from "./pages/not-found/NotFound";
//--------------------------------------------------------------------------------------------
//---------------------site styling-----------------------------------------------------------
//--------------------------------------------------------------------------------------------

export const AppContext = createContext("");

function App() {
  const { pathname } = useLocation();
  const [appLoaded, setAppLoaded] = useState(false);
  const [user, setUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartEmpty, setCartEmpty] = useState(false);
  const [cartRefresh, setCartRefresh] = useState(false);
  const [cartProducts, setProducts] = useState([]);
  const [cartLoading, setCartLoading] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const [newtworkErr, setNetworkerr] = useState(false);
  const [noLogCart, setNoLogCart] = useState([]);
  const [accessToken, setAccessToken] = useState({});
  const [searchKey, setSearchKey] = useState("");
  const [payedOrders, setPayedOrders] = useState([]);
  const [noNav, setNoNav] = useState(false);
  const [loginState, setLoginState] = useState("");
  const apiLink = "http://localhost:5000/";

  const navigate = useNavigate();

  function logUserIn(data, path) {
    const { userInfo, accessToken } = data;
    const stringifiedData = JSON.stringify(data);
    setCookie("userData", stringifiedData, 1);
    setUser(userInfo);
    setAccessToken(accessToken);
    setLoggedIn(true);
    setCartRefresh(true);
    navigate(path, { replace: true });
    deleteCookie("noLogCart");
  }

  const getCartProducts = useCallback(async () => {
    setCartLoading(true);
    try {
      if (isLoggedIn) {
        const response = await axios.get(`${apiLink}api/cart/${user.id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const { data } = response.data && response.data;
        setProducts(data);
        if (data && data.length > 0) {
          setCartEmpty(false);
        } else {
          setCartEmpty(true);
        }
        setLoading(false);
      } else {
        const rawCookie = getCookie("noLogCart");
        const productsCookie = rawCookie ? JSON.parse(rawCookie) : [];
        setProducts(productsCookie);
        if (productsCookie.length > 0) {
          setCartEmpty(false);
        } else {
          setCartEmpty(true);
        }
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
    setCartLoading(false);
  }, [user.id, accessToken, isLoggedIn]);

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

  function handleMouseDown(setClicked) {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 200);
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.classList.remove("no-scroll");
    setCartOpen(false);
    setPayedOrders([]);
    if (
      pathname === "/login" ||
      pathname === "/signup" ||
      pathname.includes("/forgot-password")
    ) {
      setNoNav(true);
    } else {
      setNoNav(false);
    }
  }, [pathname]);

  useEffect(() => {
    getCartProducts();
    setAppLoaded(true);
  }, [cartRefresh, getCartProducts, isLoggedIn, accessToken]);

  useEffect(() => {
    setCartRefresh(false);
  }, [cartRefresh]);

  useEffect(() => {
    const storedUser = getCookie("userData");
    if (storedUser) {
      const { userInfo, accessToken } = JSON.parse(storedUser);
      setUser(userInfo);
      setAccessToken(accessToken);
      setLoggedIn(true);
    } else {
      setUser({});
    }
  }, []);

  const AppContextValue = {
    logUserIn,
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
    cartLoading,
    setCartLoading,
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
    apiLink,
    setRecentProducts,
    handleMouseDown,
    loginState,
    setLoginState,
  };

  return (
    <>
      <AppContext.Provider value={AppContextValue}>
        {!noNav && (
          <>
            <NavBar />
          </>
        )}
        <div className="app-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop-men" element={<ShopPage page={"Men"} />} />
            <Route path="/shop-women" element={<ShopPage page={"Women"} />} />
            <Route path="/collection" element={<ShopPage page={"Shop"} />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/sale-shop" element={<ShopPage page={"Sale"} />} />
            <Route path="/lookbook" element={<Lookbook />} />
            <Route path="/our-story" element={<OurStoryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/sale" element={<SalePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password/*" element={<ForgotPasswordPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/profile/*" element={<ProfilePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        {!noNav && <Footer />}
        <NetworkErrPopUp />
      </AppContext.Provider>
    </>
  );
}

export default App;
