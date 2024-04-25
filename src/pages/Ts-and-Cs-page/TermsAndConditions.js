import TermsHeadBody from "./components/TermsHeadBody";

import "../../assets/styles/Ts-and-Cs-page/Ts-and-Cs-style.css";
import "../../assets/styles/Ts-and-Cs-page/Ts-and-Cs-laptop-style.css";
import "../../assets/styles/Ts-and-Cs-page/Ts-and-Cs-tab-style.css";
import "../../assets/styles/Ts-and-Cs-page/Ts-and-Cs-mobile-style.css";

const TermsAndConditions = () => {
  return (
    <main className="terms-conditions">
      <h1>Terms and conditions</h1>
      <TermsHeadBody head={"Shopping online"} />
      <TermsHeadBody head={"Accuracy of information"} />
      <TermsHeadBody head={"Terms of use"} />
      <TermsHeadBody head={"Terms of sale"} />
    </main>
  );
};
export default TermsAndConditions;
