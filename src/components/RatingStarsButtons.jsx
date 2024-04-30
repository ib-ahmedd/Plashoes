import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const RatingStarsButtons = ({
  stars,
  handleStars,
  handleMouseOut,
  handleHover,
}) => {
  const starsArray = [];
  <FontAwesomeIcon icon={faStar} style={{ color: "var(--orange)" }} />;
  for (let i = 0; i < stars; i++) {
    starsArray.push({
      element: (
        <FontAwesomeIcon icon={faStar} style={{ color: "var(--orange)" }} />
      ),
      id: i,
    });
  }

  while (starsArray.length < 5) {
    starsArray.push({
      element: (
        <FontAwesomeIcon
          icon={faStar}
          style={{ color: "var(--very-light-grey)" }}
          key={starsArray.length}
        />
      ),
      id: starsArray.length,
    });
  }

  const starButtons = starsArray.map((item) => (
    <button
      onClick={() => {
        handleStars(item.id);
      }}
      onMouseOver={() => {
        handleHover(item.id);
      }}
      onMouseOut={() => {
        handleMouseOut();
      }}
      key={item.id}
      className="rating-button"
    >
      {item.element}
    </button>
  ));
  return <div className="rating-stars">{starButtons}</div>;
};

export default RatingStarsButtons;
