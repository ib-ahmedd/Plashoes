const ReviewInputs = () => {
  return (
    <>
      <label htmlFor="review" className="review-mf">
        Your review *
      </label>
      <textarea name="review" required className="review" />
      <div className="name-email-span">
        <span>
          <label htmlFor="reviewerName" className="review-sf">
            Name *
          </label>
          <input
            type="text"
            name="reviewerName"
            required
            className="review-input"
          />
        </span>
        <span>
          <label htmlFor="reviewerEmail" className="review-sf">
            Email *
          </label>
          <input
            type="email"
            name="reviewerEmail"
            required
            className="reviewEmail"
          />
        </span>
      </div>
    </>
  );
};
export default ReviewInputs;
