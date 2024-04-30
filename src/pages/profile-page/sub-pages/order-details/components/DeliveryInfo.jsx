const DeliveryInfo = ({ orderDetails }) => {
  const { address, postal_code, mobile_no, country_code } = orderDetails;
  return (
    <article className="delivery-info infos">
      <h3>DELIVERY INFORMATION</h3>
      <div>
        <span>
          <h4>Delivery Method</h4>
          <p>Pick-up station</p>
        </span>
        <span>
          <h4>Shipping Details</h4>
          <p>Address: {address}</p>
          <p>Postal code: {postal_code}</p>
          <p>
            Mobile no: {country_code}
            {mobile_no}
          </p>
        </span>
      </div>
    </article>
  );
};
export default DeliveryInfo;
