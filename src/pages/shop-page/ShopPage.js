import "../../assets/styles/shop-page/shop-style.css";
import "../../assets/styles/shop-page/shop-laptop-style.css";
import "../../assets/styles/shop-page/shop-tab-style.css";
import "../../assets/styles/shop-page/shop-mobile-style.css";

import ItemsDisplay from "./components/ItemsDisplay";
import ShopProductsContainer from "./components/ShopProductsContainer";
import FilterMenu from "./components/FilterMenu";
import {
  useState,
  createContext,
  useEffect,
  useContext,
  useCallback,
} from "react";
import ScreenCover from "../../components/ScreenCover";
import axios from "axios";
import { AppContext } from "../../App";

export const ShopPageContext = createContext("");

const ShopPage = ({ page }) => {
  const { searchKey } = useContext(AppContext);
  const [url, setUrl] = useState(`/categories/${page}`);

  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [priceRange, setPriceRange] = useState(150);
  const [selectedOption, setSelectedOption] = useState("Default sorting");
  const [filterCategory, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [offSet, setOffset] = useState(0);
  const [itemNumbers, setItemNumbers] = useState({ start: 1, end: 12 });

  const getProducts = useCallback(async () => {
    try {
      const host = "http://localhost:5000";
      const result = await axios.get(host + url);
      const { data } = result;
      const { productsArray, count } = data;
      setProducts(productsArray);
      setCount(count);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [url]);
  const getSearchProducts = useCallback(async () => {
    const response = await axios.post("http://localhost:5000/search", {
      keywords: searchKey,
      filter: filterCategory,
      sort: selectedOption,
      priceRange: priceRange,
      offSet: offSet,
    });
    const { productsArray, count } = response.data;
    setProducts(productsArray);
    setCount(count);
    setLoading(false);
  }, [searchKey, filterCategory, selectedOption, priceRange, offSet]);
  useEffect(() => {
    if (page === "Search") {
      getSearchProducts();
    } else {
      getProducts();
    }
  }, [page, searchKey, getProducts, getSearchProducts]);

  useEffect(() => {
    setSelectedOption("Default sorting");
    setPriceRange(150);
    setUrl(`/categories/${page}`);
    setCurrentPage(1);
  }, [page]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleCurrentPage = (buttonNo) => {
    setCurrentPage(buttonNo);
    setOffset((buttonNo - 1) * 12);
    setUrl(
      `/sort-filter?page=${page}&offset=${
        (buttonNo - 1) * 12
      }&cat=${filterCategory}&price=${priceRange}&sort=${selectedOption}`
    );
  };

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    const value = e.target.value;
    setUrl(
      `/sort-filter?page=${page}&offset=${0}&cat=${filterCategory}&price=${priceRange}&sort=${value}`
    );
    setCurrentPage(1);
    setItemNumbers({ start: 1, end: 12 });
  };

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
  };
  const handleFilterPrice = (func) => {
    if (func === "set") {
      setUrl(
        `/sort-filter?page=${page}&offset=${0}&cat=${filterCategory}&price=${priceRange}&sort=${selectedOption}`
      );
      setMenuOpen(false);
      setCurrentPage(1);
      setItemNumbers({ start: 1, end: 12 });
    } else {
      setPriceRange(150);
      setUrl(
        `/sort-filter?page=${page}&offset=${0}&cat=${filterCategory}&price=${150}&sort=${selectedOption}`
      );
      setMenuOpen(false);
      setCurrentPage(1);
      setItemNumbers({ start: 1, end: 12 });
    }
  };

  const handleFilterCat = (cat) => {
    setUrl(
      `/sort-filter?page=${page}&offset=${0}&cat=${cat}&price=${priceRange}&sort=${selectedOption}`
    );
    setCategory(cat);
    setMenuOpen(false);
    setCurrentPage(1);
    setItemNumbers({ start: 1, end: 12 });
    console.log(cat);
  };
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const shopContextValue = {
    page,
    handleChange,
    category: page,
    selectedOption,
    isMenuOpen,
    toggleMenu,
    priceRange,
    handlePriceChange,
    handleFilterPrice,
    handleFilterCat,
    count,
    currentPage,
    handleCurrentPage,
    offSet,
    itemNumbers,
    setItemNumbers,
  };

  return (
    <main className="shop-page">
      <ShopPageContext.Provider value={shopContextValue}>
        {isMenuOpen && <ScreenCover toggleMenu={toggleMenu} />}
        <FilterMenu />
        <ItemsDisplay />
        <ShopProductsContainer
          products={products}
          isLoading={isLoading}
          count={count}
        />
      </ShopPageContext.Provider>
    </main>
  );
};

export default ShopPage;
