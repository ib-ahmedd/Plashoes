import { Link } from "react-router-dom";
import RatingStars from "../../../../../components/RatingStars";
import SaleModal from "../../../../../components/SaleModal";
import Price from "../../../../../components/Price";
import ApiImage from "../../../../../components/ApiImage";

const RecentProductModal = ({ id, shoename, image, price, sale, rating }) => {
  return (
    <div className="recent-product-modal">
      {sale && <SaleModal />}
      <Link to={`/product/${id}`}>
        <ApiImage imgPath={image} desc={shoename} />
      </Link>
      <span>
        <Link to={`/product/${id}`} className="name">
          {shoename}
        </Link>
        <Price price={price} sale={sale} />
        <RatingStars stars={rating} />
      </span>
    </div>
  );
};
export default RecentProductModal;
