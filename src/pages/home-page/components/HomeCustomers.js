import customerReview from "../../../arrays/cutomerReviews";
import Review from "../../../components/Review";
const HomeCustomers = () => {
  const reviewsDisplay = customerReview.map((item) => (
    <Review key={item.id} {...item} />
  ));
  return (
    <div className="home-customers">
      <h2>Our Customers speak for us</h2>
      <span>{reviewsDisplay}</span>
      <p>4.8 average rating from 1814 reviews</p>
    </div>
  );
};
export default HomeCustomers;
