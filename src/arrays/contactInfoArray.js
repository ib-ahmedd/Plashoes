import {
  faLocationDot,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const contactInfoArray = [
  {
    id: 1,
    icon: (
      <span className="icon">
        <FontAwesomeIcon icon={faMobileScreenButton} />
      </span>
    ),
    heading: "Products & order",
    content: "(+1) 123-456-7890 available 24/7",
  },
  {
    id: 2,
    icon: (
      <span className="icon">
        <FontAwesomeIcon icon={faMobileScreenButton} />
      </span>
    ),
    heading: "Info & enquiries",
    content: "(+1) 123-456-7890 available 24/7",
  },
  {
    id: 3,
    icon: (
      <span className="icon">
        <FontAwesomeIcon icon={faLocationDot} />
      </span>
    ),
    heading: "Store locator",
    content: "Find our retail near you",
  },
];
export default contactInfoArray;
