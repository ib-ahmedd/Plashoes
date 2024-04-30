import "../../assets/styles/checkout-page/checkout-style.css";
import "../../assets/styles/checkout-page/checkout-laptop-style.css";
import "../../assets/styles/checkout-page/checkout-tab-style.css";
import "../../assets/styles/checkout-page/checkout-mobile-style.css";
import CustomerInfo from "./components/CustomerInfo";
import YourOrder from "./components/YourOrder";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import PaymentSuccess from "./components/PaymentSuccess";

const Checkout = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { isLoggedIn, appLoaded, cartProducts } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (appLoaded && !isLoggedIn) {
      navigate("/login", { state: "/checkout", replace: true });
    }
  }, [isLoggedIn, navigate, appLoaded]);
  useEffect(() => {
    if (cartProducts.length < 1 && !paymentSuccess) {
      navigate("/cart", { replace: true });
    }
  }, [navigate, cartProducts.length, paymentSuccess]);
  return (
    <main className="checkout-page">
      <h1>Checkout</h1>
      <section className="checkout-content">
        {paymentSuccess ? (
          <PaymentSuccess />
        ) : (
          <CustomerInfo setPaymentSuccess={setPaymentSuccess} />
        )}
        <YourOrder />
      </section>
    </main>
  );
};
export default Checkout;
