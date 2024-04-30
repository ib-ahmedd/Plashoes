import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ResultPageBtn from "../../../components/ResultPageBtn";
import { SearchPageContext } from "../SearchPage";

const SearchResultPages = () => {
  const { count, handleCurrentPage, currentPage, setItemNumbers, offset } =
    useContext(SearchPageContext);
  let pagesArray = [];
  const pagesCount = Math.ceil(count / 12);

  for (let i = 1; i <= pagesCount; i++) {
    pagesArray.push(
      <ResultPageBtn
        pageNo={i}
        key={i}
        currentPage={currentPage}
        handleCurrentPage={handleCurrentPage}
        setItemNumbers={setItemNumbers}
        count={count}
        offset={offset}
      />
    );
  }

  return (
    <div className="pages-buttons-cont">
      {currentPage > 1 && (
        <button
          className="result-pages-button"
          onClick={() => {
            handleCurrentPage(currentPage - 1);
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      )}
      {pagesArray}
      {currentPage !== pagesCount && (
        <button
          className="result-pages-button"
          onClick={() => {
            handleCurrentPage(currentPage + 1);
          }}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      )}
    </div>
  );
};
export default SearchResultPages;
