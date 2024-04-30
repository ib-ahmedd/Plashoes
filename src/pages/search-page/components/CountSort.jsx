import SearchSortOptions from "./SearchSortOptions";

const CountSort = ({ count, itemNumbers }) => {
  return (
    <div className="count-sort">
      <span>
        <p className="result-count-p">
          Showing{" "}
          {count < 13
            ? `all ${count}`
            : `${itemNumbers.start} - ${itemNumbers.end} of ${count}`}{" "}
          results
        </p>
      </span>
      <SearchSortOptions />
    </div>
  );
};
export default CountSort;
