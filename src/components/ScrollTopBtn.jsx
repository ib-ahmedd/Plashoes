import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollTopBtn = ({ inView }) => {
  const [hidden, setHidden] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/login" || pathname === "/signup") {
      setHidden(true);
    } else {
      setHidden(false);
    }
  }, [pathname]);
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="scroll-top-btn"
      style={{
        transform: !inView && "translateY(0)",
        display: hidden && "none",
      }}
    >
      <FontAwesomeIcon icon={faAnglesUp} />
    </button>
  );
};
export default ScrollTopBtn;
