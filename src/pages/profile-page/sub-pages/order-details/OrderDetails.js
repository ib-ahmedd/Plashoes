import { useNavigate, useParams } from "react-router-dom";
import DeliveryInfo from "./components/DeliveryInfo";
import ItemsInOrder from "./components/ItemInOrder";
import OrderId from "./components/OrderId";
import PaymentInfo from "./components/PaymentInfo";
import { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../../../../App";
import LoadingItems from "./components/LoadingItems";

const OrderDetails = () => {
  const { accessToken, user, setCartRefresh } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [orderDetails, setOrderDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buyLoading, setBuyLoading] = useState(false);

  const getOrderDetails = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/order-details/${id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const { data } = response;
      setOrderDetails(data[0]);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [id, accessToken]);

  async function buyAgain(productId, productName) {
    try {
      setBuyLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/add-cart",
        {
          userId: user.id,
          productId: productId,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      if (response.status && response.status === 201) {
        setCartRefresh(true);
        navigate("/cart", { state: productName });
      }
    } catch (err) {
      console.log(err);
      setBuyLoading(false);
    }
  }

  useEffect(() => {
    getOrderDetails();
  }, [getOrderDetails]);
  return (
    <section className="order-details">
      <OrderId orderDetails={orderDetails} />
      <h2>ITEMS IN YOUR ORDER</h2>
      {!loading ? (
        <ItemsInOrder
          orderDetails={orderDetails}
          buyAgain={buyAgain}
          buyLoading={buyLoading}
        />
      ) : (
        <LoadingItems />
      )}
      <div className="payment-delivery">
        <PaymentInfo orderDetails={orderDetails} />
        <DeliveryInfo orderDetails={orderDetails} />
      </div>
    </section>
  );
};
export default OrderDetails;
