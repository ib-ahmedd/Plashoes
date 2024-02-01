import RatingStars from "./RatingStars";
import SaleModal from "./SaleModal";
const ProductModal = ({ id, shoeName, image, price, sale, rating }) => {
  const amount = price.toFixed(2);
  const value = (50 / price) * 100;
  const percentage = value.toFixed(2);

  return (
    <div className="product-modal">
      {sale && <SaleModal />}
      <a href="/">
        <img src={image} alt={shoeName + " image"} />
      </a>
      <span>
        <a href="/">{shoeName}</a>
        {sale ? (
          <span className="sale-disp">
            <p>${amount}</p>
            <p> ${percentage}</p>
          </span>
        ) : (
          <p>${amount}</p>
        )}
        <RatingStars stars={rating} />
      </span>
    </div>
  );
};

export default ProductModal;
