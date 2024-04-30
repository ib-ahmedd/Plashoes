import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { AppContext } from "../App";

const NetworkErrPopUp = () => {
  const { newtworkErr } = useContext(AppContext);
  return (
    <div
      className="network-err"
      style={newtworkErr ? { transform: "translateY(0)" } : {}}
    >
      <FontAwesomeIcon icon={faWifi} />
      <p>Unable to process request at the moment, try again later!</p>
    </div>
  );
};
export default NetworkErrPopUp;
