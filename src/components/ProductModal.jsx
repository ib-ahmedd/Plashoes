import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";
import SaleModal from "./SaleModal";
import Price from "./Price";
import ApiImage from "./ApiImage";
const ProductModal = ({
  ID,
  Product_name,
  Image,
  Price: item_price,
  Sale,
  Rating,
}) => {
  return (
    <div className="product-modal">
      {Sale && <SaleModal />}
      <Link to={`/product/${ID}`}>
        <ApiImage imgPath={Image} desc={Product_name} />
      </Link>
      <span>
        <Link to={`/product/${ID}`} className="name">
          {Product_name}
        </Link>
        <Price price={item_price} sale={Sale} />
        <RatingStars stars={Rating} />
      </span>
    </div>
  );
};

export default ProductModal;
