import contactInfoArray from "../../../arrays/contactInfoArray";
import HeadingContent from "../../../components/HeadingContent";

const ContactInfo = () => {
  const infosDisplay = contactInfoArray.map((item) => (
    <div key={item.id} className="icon-head-content-cont">
      {item.icon}
      <HeadingContent {...item} />
    </div>
  ));
  return <div className="contact-info">{infosDisplay}</div>;
};
export default ContactInfo;
