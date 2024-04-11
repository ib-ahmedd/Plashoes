import { useParams } from "react-router-dom";
import DeliveryInfo from "./components/DeliveryInfo";
import ItemsInOrder from "./components/ItemInOrder";
import OrderId from "./components/OrderId";
import PaymentInfo from "./components/PaymentInfo";
import { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../../../../App";

const OrderDetails = () => {
  const { accessToken } = useContext(AppContext);
  const { id } = useParams();

  const [orderDetails, setOrderDetails] = useState([]);
  const getOrderDetails = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/order-details/${id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const { data } = response;
      setOrderDetails(data[0]);
    } catch (err) {
      console.log(err);
    }
  }, [id, accessToken]);

  useEffect(() => {
    getOrderDetails();
  }, [getOrderDetails]);
  return (
    <section className="order-details">
      <OrderId orderDetails={orderDetails} />
      <h2>ITEMS IN YOUR ORDER</h2>
      <ItemsInOrder orderDetails={orderDetails} />
      <div className="payment-delivery">
        <PaymentInfo orderDetails={orderDetails} />
        <DeliveryInfo orderDetails={orderDetails} />
      </div>
    </section>
  );
};
export default OrderDetails;
