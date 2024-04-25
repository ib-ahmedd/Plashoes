import { useContext } from "react";
import Reviews from "./Reviews";
import { ProductPageContext } from "../ProductPage";

const ProductReviews = ({ divStyles }) => {
  const { comments } = useContext(ProductPageContext);
  return (
    <div className="product-review" style={divStyles}>
      {comments.length > 0 ? (
        <Reviews />
      ) : (
        <p className="review-sf">There are no reviews yet.</p>
      )}
    </div>
  );
};
export default ProductReviews;
