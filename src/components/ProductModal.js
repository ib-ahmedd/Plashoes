import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";
import SaleModal from "./SaleModal";
import Price from "./Price";
const ProductModal = ({ id, shoename, image, price, sale, rating }) => {
  return (
    <div className="product-modal">
      {sale && <SaleModal />}
      <Link to={`/product/${id}`}>
        <img src={image} alt={shoename + " image"} />
      </Link>
      <span>
        <Link to={`/product/${id}`}>{shoename}</Link>
        <Price price={price} sale={sale} />
        <RatingStars stars={rating} />
      </span>
    </div>
  );
};

export default ProductModal;
