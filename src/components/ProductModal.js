import RatingStars from "./RatingStars";
import SaleModal from "./SaleModal";
const ProductModal = ({ id, shoeName, image, price, sale, rating }) => {
  const numPrice = parseInt(price);
  const amount = numPrice.toFixed(2);
  const value = (50 / numPrice) * 100;
  const percentage = value.toFixed(2);
  const currency = "$";

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
            <p>{currency + amount}</p>
            <p>{currency + percentage}</p>
          </span>
        ) : (
          <p>{currency + amount}</p>
        )}
        <RatingStars stars={rating} />
      </span>
    </div>
  );
};

export default ProductModal;
