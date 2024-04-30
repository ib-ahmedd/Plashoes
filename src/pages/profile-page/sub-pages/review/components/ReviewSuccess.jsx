import { Link } from "react-router-dom";
import Image from "../../../../../components/Image";
const ReviewSuccess = () => {
  return (
    <>
      <div className="success-img-p">
        <Image source={"/images/success-35.png"} alter={"success"} />
      </div>
      <div className="feed-btns">
        <p>Thank you for your feedback!</p>
        <Link to={"/collection"} replace>
          CONTINUE SHOPPING
        </Link>
        <Link to={"/profile/reviews"} replace>
          BACK
        </Link>
      </div>
    </>
  );
};
export default ReviewSuccess;
