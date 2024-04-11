const LabeledInput = ({ label, type, name, value, handleChange }) => {
  return (
    <div className="checkout-labeled-input">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        disabled
      />
    </div>
  );
};
export default LabeledInput;
