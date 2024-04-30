import { createContext, useCallback, useEffect, useState } from "react";
import CountSort from "./components/CountSort";
import SearchProductsCont from "./components/SearchProductsCont";

import "../../assets/styles/search-page/search-style.css";
import "../../assets/styles/search-page/search-laptop-style.css";
import "../../assets/styles/search-page/search-tab-style.css";
import "../../assets/styles/search-page/search-mobile-style.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import SearchBar from "../navbar/search-bar/SearchBar";

export const SearchPageContext = createContext("");

const SearchPage = () => {
  const { state } = useLocation();
  const [isLoading, setLoading] = useState(true);
  const [itemsCount, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("Default sorting");
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [itemNumbers, setItemNumbers] = useState({ start: 1, end: 12 });

  console.log(sortOption);

  const getSearchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/search", {
        keywords: state,
        sort: sortOption,
        offset: offset,
      });
      const { data: productsArray, count } = response.data;
      setProducts(productsArray);
      setCount(count);
      setLoading(false);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [sortOption, offset, state]);

  function handleChange(e) {
    setSortOption(e.target.value);
    setCurrentPage(1);
    setItemNumbers({ start: 1, end: 12 });
    setOffset(0);
  }

  function handleCurrentPage(buttonNo) {
    const offsetNo = (buttonNo - 1) * 12;
    setLoading(true);
    setCurrentPage(buttonNo);
    setOffset(offsetNo);
    setItemNumbers({
      start: offsetNo + 1,
      end: offsetNo + 12 < itemsCount ? offsetNo + 12 : itemsCount,
    });
  }

  useEffect(() => {
    getSearchProducts();
  }, [getSearchProducts]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const SearchPageContextValue = {
    count: itemsCount,
    currentPage,
    sortOption,
    handleChange,
    setItemNumbers,
    offset,
    handleCurrentPage,
  };

  return (
    <main className="search-page">
      <SearchPageContext.Provider value={SearchPageContextValue}>
        <h1>Search</h1>
        <SearchBar />
        {!isLoading && itemsCount > 0 && (
          <CountSort itemNumbers={itemNumbers} count={itemsCount} />
        )}
        <SearchProductsCont
          isLoading={isLoading}
          products={products}
          count={itemsCount}
        />
      </SearchPageContext.Provider>
    </main>
  );
};
export default SearchPage;
