import "../../assets/styles/shop-page/shop-style.css";
import "../../assets/styles/shop-page/shop-laptop-style.css";
import "../../assets/styles/shop-page/shop-tab-style.css";
import "../../assets/styles/shop-page/shop-mobile-style.css";

import ShopProductsContainer from "./components/ShopProductsContainer";
import FilterMenu from "./components/FilterMenu";
import { useState, createContext, useEffect, useCallback } from "react";
import ScreenCover from "../../components/ScreenCover";
import axios from "axios";
import FilterSort from "./components/FilterSort";
import SearchBar from "../navbar/search-bar/SearchBar";
import { useLocation } from "react-router-dom";

export const ShopPageContext = createContext("");

const ShopPage = ({ page }) => {
  const [getItems, setGetItems] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productCategories, setProductCategories] = useState([]);
  const [itemsCount, setCount] = useState(0);
  const [stateSorted, setStateSorted] = useState(false);

  const { state } = useLocation();

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [maxAndMinPrice, setMaxAndMinPrice] = useState({
    maxPrice: 0,
    minPrice: 0,
  });
  const [priceRange, setPriceRange] = useState(0);
  const [sortOption, setSortOption] = useState("Default sorting");
  const [filterCategory, setCategory] = useState("Default");
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [itemNumbers, setItemNumbers] = useState({ start: 1, end: 12 });

  const getPageProducts = useCallback(async () => {
    setCategory("Default");
    setSortOption("Default sorting");
    setCurrentPage(1);
    setOffset(0);
    setItemNumbers({ start: 1, end: 12 });
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/product-page/${page}`
      );
      const { data, categoriesData, count, range } = response.data;
      setMaxAndMinPrice(range);
      setPriceRange(range.maxPrice);
      setProducts(data);
      setProductCategories(categoriesData);
      setCount(count);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [page]);

  const sortFilterProducts = useCallback(async () => {
    setLoading(true);
    try {
      const result = await axios.post("http://localhost:5000/api/filter-sort", {
        page: page,
        priceRange: priceRange,
        sort: sortOption,
        category: filterCategory,
        offset: offset,
      });
      const { data } = result;
      const { data: productsArray, count } = data;
      setProducts(productsArray);
      setCount(count);
      setLoading(false);
      setGetItems(false);
    } catch (err) {
      console.log(err);
    }
  }, [page, offset, priceRange, sortOption, filterCategory]);

  function handleCurrentPage(buttonNo) {
    const offsetNo = (buttonNo - 1) * 12;
    setLoading(true);
    setCurrentPage(buttonNo);
    setOffset(offsetNo);
    setItemNumbers({
      start: offsetNo + 1,
      end: offsetNo + 12 < itemsCount ? offsetNo + 12 : itemsCount,
    });
    setGetItems(true);
  }

  function handleChange(e) {
    setOffset(0)
    setSortOption(e.target.value);
    setGetItems(true);
    setCurrentPage(1);
    setItemNumbers({ start: 1, end: 12 });
  }

  function handlePriceChange(e) {
    setPriceRange(e.target.value);
  }

  function handleFilterPrice(func) {
    if (func === "set") {
      setOffset(0)
      setGetItems(true);
      setMenuOpen(false);
      setCurrentPage(1);
      setItemNumbers({ start: 1, end: 12 });
    } else {
      setOffset(0)
      setPriceRange(150);
      setGetItems(true);
      setMenuOpen(false);
      setCurrentPage(1);
      setItemNumbers({ start: 1, end: 12 });
    }
  }

  function resetFilters() {
    setOffset(0)
    setPriceRange(150);
    setCategory("Default");
    setCurrentPage(1);
    setItemNumbers({ start: 1, end: 12 });
    setGetItems(true);
  }

  function handleFilterCat(cat) {
    setOffset(0)
    setGetItems(true);
    setCategory(cat);
    setMenuOpen(false);
    setCurrentPage(1);
    setItemNumbers({ start: 1, end: 12 });
  }

  function toggleMenu() {
    setMenuOpen((prevState) => !prevState);
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  useEffect(() => {
    getPageProducts();
  }, [getPageProducts]);

  useEffect(() => {
    if (getItems) {
      sortFilterProducts();
    } else if (state && !stateSorted) {
      setSortOption(state);
      setStateSorted(true);
      sortFilterProducts();
    }
  }, [sortFilterProducts, getItems, state, stateSorted]);

  const shopContextValue = {
    maxAndMinPrice,
    handleChange,
    handleFilterCat,
    handleFilterPrice,
    page,
    category: page,
    sortOption,
    isMenuOpen,
    toggleMenu,
    priceRange,
    handlePriceChange,
    count: itemsCount,
    currentPage,
    handleCurrentPage,
    offset,
    itemNumbers,
    setItemNumbers,
    filterCategory,
    productCategories,
    resetFilters,
  };

  return (
    <main className="shop-page">
      <ShopPageContext.Provider value={shopContextValue}>
        {isMenuOpen && <ScreenCover toggleMenu={toggleMenu} />}
        <FilterMenu />
        <h1>{page}</h1>
        <SearchBar />
        <FilterSort />
        <ShopProductsContainer
          products={products}
          isLoading={isLoading}
          count={itemsCount}
        />
      </ShopPageContext.Provider>
    </main>
  );
};

export default ShopPage;
