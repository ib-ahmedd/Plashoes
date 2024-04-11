import { useContext } from "react";
import Image from "../../../../../components/Image";
import RatingStarsButtons from "../../../../../components/RatingStarsButtons";
import { AppContext } from "../../../../../App";

const RatingSect = ({
  shoe_name,
  image,
  handleHover,
  handleMouseOut,
  handleStars,
  stars,
}) => {
  const { host } = useContext(AppContext);

  return (
    <div className="rating-sect">
      <Image source={host + image} alter={shoe_name} />
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
