import { useCallback, useContext, useEffect, useState } from "react";
import OrderBtn from "./components/OrderBtns";
import InitOrders from "./components/InitOrders";
import axios from "axios";
import { AppContext } from "../../../../App";
import ClosedOrders from "./components/ClosedOrders";

const Orders = () => {
  const { user, accessToken } = useContext(AppContext);
  const [activeButton, setActiveButton] = useState("open");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const toggleOrders = (btn) => {
    setActiveButton(btn);
  };

  const getOrders = useCallback(async () => {
    if (user.id) {
      const response = await axios.get(
        `http://localhost:5000/api/orders/${user.id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const { data } = response;
      setOrders(data);
      setLoading(false);
    }
  }, [accessToken, user.id]);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  const openOrders = orders.filter(
    (item) => item.order_status === "Processing"
  );

  const closedOrders = orders.filter(
    (item) => item.order_status === "Delivered"
  );
  return (
    <section className="orders">
      <div className="orders-body">
        <span className="orders-btns">
          <OrderBtn
            text={`OPEN ORDERS (${openOrders.length})`}
            btn={"open"}
            activeBtn={activeButton}
            toggleOrders={toggleOrders}
          />
          <OrderBtn
            text={`CLOSED ORDERS (${closedOrders.length})`}
            btn={"close"}
            activeBtn={activeButton}
            toggleOrders={toggleOrders}
          />
        </span>
        {activeButton === "open" ? (
          openOrders.length > 0 ? (
            <InitOrders orders={openOrders} loading={loading} />
          ) : (
            <p className="empty-profile-tab">You have no open orders</p>
          )
        ) : closedOrders.length > 0 ? (
          <ClosedOrders orders={closedOrders} loading={loading} />
        ) : (
          <p className="empty-profile-tab">You have no closed orders</p>
        )}
      </div>
    </section>
  );
};
export default Orders;
