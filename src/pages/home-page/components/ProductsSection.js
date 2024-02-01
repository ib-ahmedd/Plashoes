const ProductsSection = ({ heading, linkText, displayedProducts }) => {
  return (
    <>
      <span>
        <h2>{heading}</h2>
        <a href="/">{linkText}</a>
      </span>
      <div className="products-container">{displayedProducts}</div>
    </>
  );
};

export default ProductsSection;
