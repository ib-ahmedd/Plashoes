import RatingStars from "./RatingStars";
import Image from "./Image";

const Review = ({ review, name, reviewImage, stars }) => {
  return (
    <div className="review">
      <RatingStars stars={stars} />
      <p>{review}</p>
      <span>
        <Image source={reviewImage} alter={"profile picture"} />
        <p>{name}</p>
      </span>
    </div>
  );
};

export default Review;
