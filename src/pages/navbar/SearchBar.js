import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const SearchBar = () => {
  return (
    <section className="search-bar">
      <form>
        <input
          type="text"
          name="search-products"
          placeholder="Search products... "
          className="search"
        />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </section>
  );
};

export default SearchBar;
