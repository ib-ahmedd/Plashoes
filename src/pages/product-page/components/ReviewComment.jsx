import { useContext } from "react";
import RatingStars from "../../../components/RatingStars";
import { AppContext } from "../../../App";

const ReviewComment = ({
  user_id,
  stars,
  review_title,
  review_detail,
  review_date,
  reviewer_name,
}) => {
  const { user } = useContext(AppContext);
  return (
    <article className="comment">
      <RatingStars stars={stars} />
      <h4>{review_title}</h4>
      <p>{review_detail}</p>
      <p>
        {review_date.slice(0, 10)} by{" "}
        <strong>
          {reviewer_name}
          {user_id === user.id && " (you)"}
        </strong>
      </p>
    </article>
  );
};
export default ReviewComment;
