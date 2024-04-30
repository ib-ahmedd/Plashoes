import FontDesc from "../../../components/FontDesc";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faArrowsSpin } from "@fortawesome/free-solid-svg-icons";

const FootIcons = () => {
  return (
    <section className="foot-icons">
      <FontDesc icon={faLock} desc={"Secure Payment"} />
      <FontDesc icon={faTruck} desc={"Express Shipping"} />
      <FontDesc icon={faArrowsSpin} desc={"Free Return"} />
    </section>
  );
};

export default FootIcons;
