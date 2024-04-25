import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

import "../../assets/styles/contact-page/contact-style.css";
import "../../assets/styles/contact-page/contact-laptop-style.css";
import "../../assets/styles/contact-page/contact-tab-style.css";
import "../../assets/styles/contact-page/contact-mobile-style.css";
import ContactFAQs from "./components/ContactFAQs";
import { useContext, useState } from "react";
import { AppContext } from "../../App";
import axios from "axios";
import MessageSent from "./components/MessageSent";
const ContactPage = () => {
  const { isLoggedIn, user } = useContext(AppContext);

  const [inputs, setInputs] = useState({
    contactName: user.user_name ? user.user_name : "",
    contactEmail: user.user_name ? user.user_name : "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  function handleInputs(e) {
    const { name, value } = e.target;
    setInputs((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact-message",
        {
          contactName: isLoggedIn ? user.user_name : inputs.contactName,
          contactEmail: isLoggedIn ? user.email : inputs.contactEmail,
          contactMessage: inputs.message,
        }
      );
      if (response.status && response.status === 200) {
        setSuccess(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <main className="contact-page">
      <h1>Contact</h1>
      <section className="contact-form">
        <ContactInfo />
        {success ? (
          <MessageSent />
        ) : (
          <ContactForm
            inputs={inputs}
            handleInputs={handleInputs}
            handleSubmit={handleSubmit}
          />
        )}
      </section>
      <ContactFAQs />
    </main>
  );
};
export default ContactPage;
