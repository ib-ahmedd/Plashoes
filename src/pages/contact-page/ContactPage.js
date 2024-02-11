import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

import "../../assets/styles/contact-page/contact-style.css";
import "../../assets/styles/contact-page/contact-tab-style.css";
import "../../assets/styles/contact-page/contact-mobile-style.css";
import ContactFAQs from "./components/ContactFAQs";
const ContactPage = () => {
  return (
    <main className="contact-page">
      <h1>Contact</h1>
      <section className="contact-form">
        <ContactInfo />
        <ContactForm />
      </section>
      <ContactFAQs />
    </main>
  );
};
export default ContactPage;
