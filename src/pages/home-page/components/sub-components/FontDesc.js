import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FontDesc = ({ icon, desc }) => {
  return (
    <div className="icon-desc">
      <FontAwesomeIcon icon={icon} />
      <h4>{desc}</h4>
    </div>
  );
};
export default FontDesc;
