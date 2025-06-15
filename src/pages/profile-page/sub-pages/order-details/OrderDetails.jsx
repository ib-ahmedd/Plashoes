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
  const { accessToken, user, setCartRefresh, cartProducts } =
    useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [orderDetails, setOrderDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [buyLoading, setBuyLoading] = useState(false);

  const getOrderDetails = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:8080/order-details/${id}`,
        {
          headers: {
            Authorization: accessToken,
          },
        }
      );
      const { data } = response;
      setOrderDetails(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [id, accessToken]);

  async function buyAgain(productId, productName) {
    try {
      setBuyLoading(true);
      const foundProduct = cartProducts.find(
        (item) => item.product_id === parseInt(productId)
      );

      if (foundProduct) {
        await axios.patch(
          `http://localhost:8080/cart-update/${foundProduct.id}`,
          {
            quantity: foundProduct.quantity + 1,
          },
          {
            headers: {
              Authorization: accessToken,
            },
          }
        );
        setCartRefresh(true);
        navigate("/cart", { state: productName });
      } else {
        await axios.post(
          "http://localhost:8080/add-cart",
          {
            user_id: user.id,
            product_id: productId,
            quantity: 1,
          },
          {
            headers: {
              Authorization: accessToken,
            },
          }
        );
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
