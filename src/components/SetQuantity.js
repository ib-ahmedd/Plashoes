const SetQuantity = ({ id, handleQuantity, quantity }) => {
  return (
    <div className="quantity">
      <button
        onClick={() => {
          handleQuantity("sub", id, quantity);
        }}
      >
        -
      </button>
      <p>{quantity}</p>
      <button
        onClick={() => {
          handleQuantity("add", id, quantity);
        }}
      >
        +
      </button>
    </div>
  );
};
export default SetQuantity;
