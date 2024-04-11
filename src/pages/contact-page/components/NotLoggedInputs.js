const NotLoggedInputs = ({ inputs, handleInputs }) => {
  return (
    <>
      <label htmlFor="contactName">Name *</label>
      <input
        type="text"
        name="contactName"
        value={inputs.contactName}
        onChange={handleInputs}
        required
      />
      <label htmlFor="contactEmail">Email *</label>
      <input
        type="email"
        name="contactEmail"
        value={inputs.contactEmail}
        onChange={handleInputs}
        required
      />
    </>
  );
};
export default NotLoggedInputs;
