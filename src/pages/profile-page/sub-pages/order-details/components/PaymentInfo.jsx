const PaymentInfo = ({ orderDetails }) => {
  const { price, quantity, totalprice } = orderDetails;
  return (
    <article className="payment-info infos">
      <h3>PAYMENT INFORMATION</h3>
      <div>
        <span>
          <h4>Payment Method</h4>
          <p>Pay with Cards, Bank Transfer or USSD</p>
        </span>
        <span>
          <h4>Payment Details</h4>
          <p>Unit price: {price}</p>
          <p>Quantity: {quantity}</p>
          <p>Total: ${totalprice}</p>
        </span>
      </div>
    </article>
  );
};
export default PaymentInfo;
