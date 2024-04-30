import { useContext } from "react";
import { AppContext } from "../../../App";
import NotLoggedInputs from "./NotLoggedInputs";
import LoggedInputs from "./LoggedInputs";

const ContactForm = ({ inputs, handleInputs, handleSubmit }) => {
  const { isLoggedIn } = useContext(AppContext);
  return (
    <form className="contact-form-inputs" onSubmit={handleSubmit}>
      {isLoggedIn ? (
        <LoggedInputs />
      ) : (
        <NotLoggedInputs inputs={inputs} handleInputs={handleInputs} />
      )}
      <label htmlFor="message">Comment or message *</label>
      <textarea
        name="message"
        id="message"
        value={inputs.message}
        onChange={handleInputs}
        maxLength={200}
        required
      />

      <button>SEND MESSAGE</button>
    </form>
  );
};
export default ContactForm;
