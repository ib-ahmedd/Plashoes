import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <section className="payment-success">
      <span>
        <img src="/images/success-35.png" alt="success" />
      </span>
      <h3>THANK YOU FOR YOUR PURCHASE!</h3>
      <p>You will recieve an email with details of your order</p>
      <Link to={"/collection"}>CONTINUE SHOPPING</Link>
      <Link to={"/profile/orders"}>VIEW ORDERS</Link>
    </section>
  );
};
export default PaymentSuccess;
