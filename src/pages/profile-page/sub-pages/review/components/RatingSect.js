import RatingStarsButtons from "../../../../../components/RatingStarsButtons";
import ApiImage from "../../../../../components/ApiImage";

const RatingSect = ({
  shoe_name,
  image,
  handleHover,
  handleMouseOut,
  handleStars,
  stars,
}) => {
  return (
    <div className="rating-sect">
      <ApiImage imgPath={image} desc={shoe_name} />
      <span>
        <p>{shoe_name}</p>
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
