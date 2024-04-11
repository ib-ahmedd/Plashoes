import { useContext, useRef, useState } from "react";
import RatingSect from "./components/RatingSect";
import ReviewSect from "./components/ReviewSect";
import useGet from "../../../../hooks/useGet";
import { useLocation, useParams } from "react-router-dom";
import { AppContext } from "../../../../App";
import axios from "axios";
import ReviewSuccess from "./components/ReviewSuccess";

const Review = () => {
  const { id } = useParams();
  const { accessToken, host, user } = useContext(AppContext);
  const { result } = useGet(`/review/${id}`, accessToken);
  const [inputs, setInputs] = useState({
    reviewTitle: "",
    reviewDetail: "",
  });

  const { state } = useLocation();
  const [stars, setStars] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [success, setSuccess] = useState(false);
  const currentStarsCount = useRef(0);
  async function handleSubmit(e) {
    e.preventDefault();
    setDisabledBtn(true);
    try {
      const response = await axios.post(
        host + "submit-review",
        {
          product_id: id,
          user_id: user.id,
          reviewer_name: user.user_name,
          stars: stars,
          review_title: inputs.reviewTitle,
          review_detail: inputs.reviewDetail,
          order_id: state.id,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.status && response.status === 201) {
        setSuccess(true);
      }
    } catch (err) {
      console.log(err);
      setDisabledBtn(false);
    }
  }
  function handleInputs(e) {
    const { name, value } = e.target;
    setInputs((prevState) => {
      return { ...prevState, [name]: value };
    });
  }
  function handleStars(starId) {
    setStars(starId + 1);
    currentStarsCount.current = starId + 1;
    setClicked(true);
  }
  function handleHover(starId) {
    setStars(starId + 1);
  }
  function handleMouseOut() {
    if (!clicked) {
      setStars(0);
    } else {
      setStars(currentStarsCount.current);
    }
  }

  return (
    <section className="review-page">
      {!success ? (
        <>
          <h2>SELECT THE STARS TO RATE THE PRODUCT</h2>
          <RatingSect
            {...result}
            handleHover={handleHover}
            handleMouseOut={handleMouseOut}
            handleStars={handleStars}
            stars={stars}
          />
          <h2>LEAVE A REVIEW</h2>
          <ReviewSect
            inputs={inputs}
            handleInputs={handleInputs}
            handleSubmit={handleSubmit}
            disabledBtn={disabledBtn}
          />
        </>
      ) : (
        <ReviewSuccess />
      )}
    </section>
  );
};
export default Review;
