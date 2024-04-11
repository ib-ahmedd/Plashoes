import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchResults from "./components/SearchResult";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [resultsStyle, setResultsStyle] = useState({ display: "none" });
  const [hidden, setHidden] = useState(false);
  const { pathname } = useLocation();
  const { setSearchKey } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    setResultsStyle({ display: "none" });
    setSearchInput("");
    if (pathname === "/login" || pathname === "/signup") {
      setHidden(true);
    } else {
      setHidden(false);
    }
  }, [pathname]);

  async function handleSearch(e) {
    const { value } = e.target;
    setSearchInput(value);
    if (value !== "") {
      try {
        const response = await axios.get(
          `http://localhost:5000/search/${value}`
        );
        const { data } = response;
        setSearchResults(data);
        setResultsStyle({});
      } catch (err) {
        console.log(err);
      }
    } else {
      setResultsStyle({ display: "none" });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSearchKey(searchInput);
    setResultsStyle({ display: "none" });
    navigate("/search");
  }
  return (
    <section className="search-bar" style={hidden ? { display: "none" } : {}}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search-products"
          value={searchInput}
          placeholder="Search products... "
          className="search"
          onChange={handleSearch}
        />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <SearchResults
        searchResults={searchResults}
        resultsStyle={resultsStyle}
      />
    </section>
  );
};

export default SearchBar;
