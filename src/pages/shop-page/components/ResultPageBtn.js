const ResultPageBtn = ({
  pageNo,
  currentPage,
  handleCurrentPage,
  setItemNumbers,
  offSet,
  count,
}) => {
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
        setItemNumbers({
          start: offSet + 1,
          end: offSet + 12 < count ? offSet + 12 : count,
        });
      }}
    >
      {pageNo}
    </button>
  );
};
export default ResultPageBtn;
