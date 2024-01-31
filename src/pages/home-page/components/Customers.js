import customerReview from "../../../cutomerReviews";
import Review from "./sub-components/Review";
const Customers = () => {
  const reviewsDisplay = customerReview.map((item) => (
    <Review key={item.id} {...item} />
  ));
  return (
    <div className="customers">
      <h2>Our Customers speak for us</h2>
      <span>{reviewsDisplay}</span>
      <p>4.8 average rating from 1814 reviews</p>
    </div>
  );
};
export default Customers;
