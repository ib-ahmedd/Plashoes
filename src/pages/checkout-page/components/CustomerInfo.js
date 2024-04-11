import { AppContext } from "../../../App";
import LabeledInput from "./LabeledInput";
import { useContext, useEffect, useState } from "react";
import PayStackBtn from "./PayStackBtn";

const CustomerInfo = ({ setPaymentSuccess }) => {
  const { user } = useContext(AppContext);
  const [inputs, setInputs] = useState({
    email: "",
    user_name: "",
    fname: "",
    lname: "",
    address: "",
    country_code: "",
    mobile_no: "",
    postal_code: "",
  });

  useEffect(() => {
    if (user.email) {
      const nameArray = user.user_name.split(" ");
      const countryCodeArray = user.country_code.split(" ");
      const [fname, lname] = nameArray;
      const [code, number] = countryCodeArray;
      setInputs({ ...user, fname, lname, country_code: number, code });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  return (
    <section className="customer-info">
      <h2>Customer information</h2>
      <LabeledInput
        label={"Email address"}
        type={"email"}
        name={"email"}
        value={inputs.email}
        handleChange={handleChange}
      />
      <span className="names">
        <LabeledInput
          label={"First name"}
          type={"text"}
          name={"fname"}
          value={inputs.fname}
          handleChange={handleChange}
        />
        <LabeledInput
          label={"Last name"}
          type={"text"}
          name={"lname"}
          value={inputs.lname}
          handleChange={handleChange}
        />
      </span>
      <LabeledInput
        label={"Delivery address"}
        type={"text"}
        name={"address"}
        value={inputs.address}
        handleChange={handleChange}
      />
      <span className="phone-postcode">
        <LabeledInput
          label={"Mobile no"}
          type={"tel"}
          name={"mobile_no"}
          value={inputs.country_code + inputs.mobile_no}
          handleChange={handleChange}
        />
        <LabeledInput
          label={"Postal code"}
          type={"tel"}
          name={"postal_code"}
          value={inputs.postal_code}
          handleChange={handleChange}
        />
      </span>
      <h2>Additional information</h2>
      <textarea placeholder="Notes about your order, e.g special notes for delivery." />
      <PayStackBtn setPaymentSuccess={setPaymentSuccess} />
    </section>
  );
};
export default CustomerInfo;
