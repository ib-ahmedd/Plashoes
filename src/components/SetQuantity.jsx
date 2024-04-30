import { useContext, useState } from "react";
import { AppContext } from "../App";

const SetQuantity = ({ id, handleQuantity, quantity }) => {
  const { handleMouseDown } = useContext(AppContext);
  const [subClicked, setSubClicked] = useState(false);
  const [addClicked, setAddClicked] = useState(false);
  return (
    <div className="quantity">
      <button
        onClick={() => {
          handleQuantity("sub", id, quantity);
        }}
        onMouseDown={() => {
          handleMouseDown(setSubClicked);
        }}
        style={{ backgroundColor: subClicked && "var(--light-grey)" }}
      >
        -
      </button>
      <p>{quantity}</p>
      <button
        onClick={() => {
          handleQuantity("add", id, quantity);
        }}
        onMouseDown={() => {
          handleMouseDown(setAddClicked);
        }}
        style={{ backgroundColor: addClicked && "var(--light-grey)" }}
      >
        +
      </button>
    </div>
  );
};
export default SetQuantity;
