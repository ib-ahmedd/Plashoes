import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";
import SaleModal from "./SaleModal";
import Price from "./Price";
import ApiImage from "./ApiImage";
const ProductModal = ({
  id,
  product_name,
  image,
  price: item_price,
  sale,
  rating,
}) => {
  return (
    <div className="product-modal">
      {sale && <SaleModal />}
      <Link to={`/product/${id}`}>
        <ApiImage imgPath={image} desc={product_name} />
      </Link>
      <span>
        <Link to={`/product/${id}`} className="name">
          {product_name}
        </Link>
        <Price price={item_price} sale={sale} />
        <RatingStars stars={rating} />
      </span>
    </div>
  );
};

export default ProductModal;
