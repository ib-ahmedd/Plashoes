import { useContext } from "react";
import { PaystackButton } from "react-paystack";
import { AppContext } from "../../../App";
import axios from "axios";

const PayStackBtn = ({ setPaymentSuccess }) => {
  const { user, cartProducts, accessToken, setCartRefresh, setPayedOrders } =
    useContext(AppContext);
  let totalAmount = 0;
  cartProducts.forEach(
    (item) =>
      (totalAmount = totalAmount + parseFloat(item.price) * item.quantity)
  );
  const amountInNaira = totalAmount * 500;
  const amountInKobo = (amountInNaira * 100).toFixed(2);

  const publicKey = "pk_test_598a86084da5e02b6fe8ba4d9921241db331c813";
  const amount = amountInKobo;
  const componentProps = {
    email: user.email,
    amount,
    metadata: {
      name: user.user_name,
      phone: 0 + user.mobile_no,
    },
    publicKey,
    text: "PROCEED TO PAYMENT",
    onSuccess: () => handlePaySuccess(),
    onClose: () => console.log("Wait! Don't leave :("),
  };

  async function handlePaySuccess() {
    try {
      setPaymentSuccess(true);
      const orderProducts = cartProducts.map((item) => {
        return {
          product_id: item.product_id,
          quantity: item.quantity,
          totalPrice: parseFloat(
            (parseFloat(item.price) * item.quantity).toFixed(2)
          ),
        };
      });
      await axios.post(
        "https://plashoes-server.onrender.com/order",
        {
          user_id: user.id,
          ordered_items: orderProducts,
        },
        {
          headers: {
            Authorization: accessToken,
          },
        }
      );

      await axios.delete(
        `https://plashoes-server.onrender.com/empty-cart/${user.id}`,
        {
          headers: {
            Authorization: accessToken,
          },
        }
      );
      setPayedOrders(cartProducts);
      setCartRefresh(true);
    } catch (err) {
      console.log(err);
    }
  }
  return <PaystackButton {...componentProps} />;
};
export default PayStackBtn;
