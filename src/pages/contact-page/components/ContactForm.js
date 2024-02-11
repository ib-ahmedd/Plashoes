const ContactForm = () => {
  return (
    <form
      className="contact-form-inputs"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="contactName">Name *</label>
      <input type="text" name="contactName" required />

      <label htmlFor="contactEmail">Email *</label>
      <input type="email" name="contactEmail" required />

      <label htmlFor="message">Comment or message *</label>
      <textarea name="message" required />

      <button>SEND MESSAGE</button>
    </form>
  );
};
export default ContactForm;
