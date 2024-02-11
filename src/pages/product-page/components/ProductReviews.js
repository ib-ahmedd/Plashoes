import { useContext, useState } from "react";
import RatingStarsButtons from "../../../components/RatingStarsButtons";
import ReviewInputs from "./ReviewInputs";
import { ProductPageContext } from "../ProductPage";

const ProductReviews = ({ divStyles }) => {
  let reviews;
  const [stars, setStars] = useState(0);
  const { product } = useContext(ProductPageContext);
  const { shoename } = product;
  const handleStars = (e) => {
    setStars(e + 1);
  };

  return (
    <div className="product-review" style={divStyles}>
      {reviews ? (
        reviews
      ) : (
        <p className="review-sf">There are no reviews yet.</p>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="product-review-form"
      >
        {!reviews && (
          <p className="review-bf">Be the first to review "{shoename}"</p>
        )}
        <p className="review-sf">
          Your email adress will not be published. Fields required are marked*
        </p>

        <span className="rating-span">
          <p className="review-mf">Your rating: * </p>
          <RatingStarsButtons stars={stars} handleStars={handleStars} />
        </span>
        <ReviewInputs />
        <button className="review-submit">SUBMIT</button>
      </form>
    </div>
  );
};
export default ProductReviews;
