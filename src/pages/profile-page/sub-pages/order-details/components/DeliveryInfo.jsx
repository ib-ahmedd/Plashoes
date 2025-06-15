import { useContext } from "react";
import { AppContext } from "../../../../../App";

const DeliveryInfo = () => {
  const { user } = useContext(AppContext);
  const { address, phone, postalcode, code } = user;

  const country_code = code.split(" ")[1];
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
          <p>Postal code: {postalcode}</p>
          <p>
            Mobile no: {country_code}
            {phone}
          </p>
        </span>
      </div>
    </article>
  );
};
export default DeliveryInfo;
