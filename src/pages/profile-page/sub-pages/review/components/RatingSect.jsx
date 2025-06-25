import RatingStarsButtons from "../../../../../components/RatingStarsButtons";
import ApiImage from "../../../../../components/ApiImage";

const RatingSect = ({
  product_name,
  image,
  handleHover,
  handleMouseOut,
  handleStars,
  stars,
}) => {
  return (
    <div className="rating-sect">
      <ApiImage imgPath={image} desc={product_name} />
      <span>
        <p>{product_name}</p>
        <RatingStarsButtons
          stars={stars}
          handleStars={handleStars}
          handleMouseOut={handleMouseOut}
          handleHover={handleHover}
        />
      </span>
    </div>
  );
};
export default RatingSect;
