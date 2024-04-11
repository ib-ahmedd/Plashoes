import { useContext } from "react";
import { AppContext } from "../../../../../App";

const ReviewSect = ({ inputs, handleInputs, handleSubmit, disabledBtn }) => {
  const { user } = useContext(AppContext);
  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <span className="title-name">
        <span>
          <label>Review Title</label>
          <input
            type="text"
            placeholder="e.g I like it!/ I don't like it"
            name="reviewTitle"
            value={inputs.reviewTitle}
            onChange={handleInputs}
            maxLength={30}
          />
        </span>
        <span>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={user ? user.user_name : ""}
            disabled
          />
        </span>
      </span>
      <textarea
        placeholder="Tell us more about your rating"
        name="reviewDetail"
        value={inputs.reviewDetail}
        onChange={handleInputs}
        maxLength={200}
      />
      {!disabledBtn ? (
        <button>SUBMIT YOUR REVIEW</button>
      ) : (
        <button style={{ backgroundColor: "#ffc86a" }} disabled>
          SUBMIT YOUR REVIEW
        </button>
      )}
    </form>
  );
};
export default ReviewSect;
