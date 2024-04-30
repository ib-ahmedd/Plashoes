const ResultPageBtn = ({ pageNo, currentPage, handleCurrentPage }) => {
  const currentPageStyle = {
    backgroundColor: "var(--green)",
    color: "white",
  };
  return (
    <button
      className="result-pages-button"
      style={currentPage === pageNo ? currentPageStyle : {}}
      onClick={() => {
        handleCurrentPage(pageNo);
      }}
    >
      {pageNo}
    </button>
  );
};
export default ResultPageBtn;
