const NotLoggedInputs = ({ inputs, handleInputs }) => {
  return (
    <>
      <label htmlFor="contactName">Name *</label>
      <input
        autoComplete="on"
        type="text"
        name="contactName"
        id="contactName"
        value={inputs.contactName}
        onChange={handleInputs}
        required
      />
      <label htmlFor="contactEmail">Email *</label>
      <input
        autoComplete="on"
        type="email"
        name="contactEmail"
        id="contactEmail"
        value={inputs.contactEmail}
        onChange={handleInputs}
        required
      />
    </>
  );
};
export default NotLoggedInputs;
