const SetQuantity = ({ setQuantity, quantity }) => {
  return (
    <div className="quantity">
      <button
        onClick={() => {
          setQuantity((prevQuant) => prevQuant - 1);
        }}
      >
        -
      </button>
      <p>{quantity}</p>
      <button
        onClick={() => {
          setQuantity((prevQuant) => prevQuant + 1);
        }}
      >
        +
      </button>
    </div>
  );
};
export default SetQuantity;
