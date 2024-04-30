import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const RatingStars = ({ stars }) => {
  const starsArray = [];
  for (let i = 0; i <= stars - 1; i++) {
    starsArray.push(
      <FontAwesomeIcon icon={faStar} style={{ color: "orange" }} key={i} />
    );
  }
  while (starsArray.length < 5) {
    starsArray.push(
      <FontAwesomeIcon icon={faStar} key={starsArray.length + 1} />
    );
  }
  return <div className="rating-stars">{starsArray}</div>;
};

export default RatingStars;
