const OrderBtn = ({ text, activeBtn, btn, toggleOrders }) => {
  const activeStyle = {
    color: "var(--orange)",
    borderBottom: "3px solid var(--orange)",
  };
  return (
    <button
      className="order-btn"
      style={activeBtn === btn ? activeStyle : {}}
      onClick={() => {
        toggleOrders(btn);
      }}
    >
      {text}
    </button>
  );
};
export default OrderBtn;
