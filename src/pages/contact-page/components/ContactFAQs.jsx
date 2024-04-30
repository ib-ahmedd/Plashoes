import FAQs from "./FAQs";
import FAQsArray from "../../../arrays/FAQsArray";
import { useState } from "react";

const ContactFAQs = () => {
  const [openQuestion, setOpenQuestion] = useState("");
  const handleOpenQuestion = (id) => {
    setOpenQuestion((prevState) => (prevState === id ? "" : id));
  };

  const FAQsDisplay = FAQsArray.map((item) => {
    if (item.id === openQuestion) {
      return (
        <FAQs
          key={item.id}
          {...item}
          handleOpenQuestion={handleOpenQuestion}
          isOpen={true}
        />
      );
    } else {
      return (
        <FAQs
          key={item.id}
          {...item}
          handleOpenQuestion={handleOpenQuestion}
          isOpen={false}
        />
      );
    }
  });

  return (
    <section className="contact-FAQs">
      <div className="FAQs-heading">
        <h2>Frequently Asked Questions</h2>
        <p>Purus amet scelerisque nisl nibh felis massa a enim gravida</p>
      </div>
      <div className="FAQs-cont">{FAQsDisplay}</div>
    </section>
  );
};
export default ContactFAQs;
