import LoadingProductModal from "./LoadingProductModal";

const LoadingSection = () => {
  const emptyArray = ["", "", "", "", "", ""];
  const loadingModalDisplay = emptyArray.map((item) => <LoadingProductModal />);
  return <section className="loading-section">{loadingModalDisplay}</section>;
};

export default LoadingSection;
