import { useContext } from "react";
import ReviewComment from "./ReviewComment";
import { ProductPageContext } from "../ProductPage";

const Reviews = () => {
  const { comments } = useContext(ProductPageContext);
  const displayedComments = comments.map((item) => (
    <ReviewComment key={item.id} {...item} />
  ));
  return <div className="review-comments">{displayedComments}</div>;
};
export default Reviews;
