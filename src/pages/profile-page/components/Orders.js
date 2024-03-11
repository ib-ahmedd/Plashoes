import { useState } from "react";
import OrderBtn from "./OrderBtns";
import InitOrders from "./InitOrders";
import demoOrdersArray from "../../../arrays/demoOrdersArray";

const Orders = () => {
  const [activeButton, setActiveButton] = useState("open");
  const toggleOrders = (btn) => {
    setActiveButton(btn);
  };
  return (
    <section className="orders">
      <div className="orders-body">
        <span className="orders-btns">
          <OrderBtn
            text={"OPEN ORDERS (0)"}
            btn={"open"}
            activeBtn={activeButton}
            toggleOrders={toggleOrders}
          />
          <OrderBtn
            text={"CLOSED ORDERS (0)"}
            btn={"close"}
            activeBtn={activeButton}
            toggleOrders={toggleOrders}
          />
        </span>
        <InitOrders orders={demoOrdersArray} />
      </div>
    </section>
  );
};
export default Orders;
