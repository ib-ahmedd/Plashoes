import SearchResultItem from "./SearchResultItem";

const SearchResults = ({ searchResults, resultsStyle }) => {
  const displayedResult =
    searchResults &&
    searchResults.map((item) => <SearchResultItem key={item.id} {...item} />);
  return (
    <section className="search-results" style={resultsStyle}>
      {displayedResult}
    </section>
  );
};
export default SearchResults;
