import ItemsDisplay from "./components/ItemsDisplay";
import useFetch from "../../hooks/useFetch";
import ProductsContainer from "../../components/ProductsContainer";
import FilterMenu from "./components/FilterMenu";
import { useState, createContext, useEffect } from "react";
import ScreenCover from "../../components/ScreenCover";

export const ShopPageContext = createContext("");

const ShopPage = ({ page }) => {
  const [url, setUrl] = useState(`http://localhost:5000/categories/${page}`);
  const [isMenuOpen, setMenuOpen] = useState({});
  const [closeMenu, setCloseMenu] = useState({});
  const [priceRange, setPriceRange] = useState(150);
  const [selectedOption, setSelectedOption] = useState("Default sorting");
  const [filterCategory, setCategory] = useState("");

  const { products, isLoading, categories } = useFetch(url);

  const resultCount = products.length;

  useEffect(() => {
    setSelectedOption("Default sorting");
    setPriceRange(150);
    setUrl(`http://localhost:5000/categories/${page}`);
  }, [page]);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    const value = e.target.value;
    setUrl(
      `http://localhost:5000/sort-filter?page=${page}&cat=${filterCategory}&price=${priceRange}&sort=${value}`
    );
    console.log(products);
  };

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
  };
  const handleFilterPrice = (func) => {
    if (func === "set") {
      setUrl(
        `http://localhost:5000/sort-filter?page=${page}&cat=${filterCategory}&price=${priceRange}&sort=${selectedOption}`
      );
      setMenuOpen({});
      setCloseMenu({});
    } else {
      setPriceRange(150);
      setUrl(
        `http://localhost:5000/sort-filter?page=${page}&cat=${filterCategory}&price=${150}&sort=${selectedOption}`
      );
      setMenuOpen({});
      setCloseMenu({});
    }
  };

  const handleFilterCat = (cat) => {
    setUrl(
      `http://localhost:5000/sort-filter?page=${page}&cat=${cat}&price=${priceRange}&sort=${selectedOption}`
    );
    setCategory(cat);
    setMenuOpen({});
    setCloseMenu({});
  };
  const toggleMenu = () => {
    setMenuOpen({ transform: "translateX(0)" });
    setCloseMenu({
      display: "block",
      position: "fixed",
      width: "100%",
      right: "0",
      bottom: "0",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: "2",
    });
  };

  const shopContextValue = {
    page,
    resultCount,
    handleChange,
    category: page,
    selectedOption,
    isMenuOpen,
    toggleMenu,
    closeMenu,
    setCloseMenu,
    priceRange,
    handlePriceChange,
    handleFilterPrice,
    handleFilterCat,
    categories,
  };

  return (
    <main className="shop-page">
      <ShopPageContext.Provider value={shopContextValue}>
        <section className="shop-items-section">
          <ScreenCover
            setCloseMenu={setCloseMenu}
            setMenuOpen={setMenuOpen}
            closeMenu={closeMenu}
          />
          <FilterMenu />
          <ItemsDisplay
            category={page}
            resultCount={resultCount}
            handleChange={handleChange}
          />
          <ProductsContainer products={products} isLoading={isLoading} />
        </section>
      </ShopPageContext.Provider>
    </main>
  );
};

export default ShopPage;
