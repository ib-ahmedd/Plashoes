import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollTopBtn = ({ inView }) => {
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="scroll-top-btn"
      style={{ transform: !inView && "translateY(0)" }}
    >
      <FontAwesomeIcon icon={faAnglesUp} />
    </button>
  );
};
export default ScrollTopBtn;
