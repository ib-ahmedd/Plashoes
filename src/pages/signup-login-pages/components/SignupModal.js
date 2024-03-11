import { Link } from "react-router-dom";
import AddressDetails from "./AddressDetails";
import PersonalDetails from "./PersonalDetails";
import { useContext } from "react";
import { SignupPageContext } from "../SignupPage";

const SignupModal = () => {
  const { formComplete, termsChecked, handleTermsChecked } =
    useContext(SignupPageContext);
  return (
    <form className="signup-modal">
      <span>
        <h1>Sign up</h1>
      </span>
      <PersonalDetails />
      <AddressDetails />
      <span className="terms">
        <input
          type="checkbox"
          name="terms"
          checked={termsChecked}
          onChange={handleTermsChecked}
        ></input>
        <label htmlFor="terms">
          I agree to the <Link to={"/terms"}>terms and conditions</Link>
        </label>
      </span>
      <span>
        {formComplete && termsChecked ? (
          <button className="signup-btn">SIGN UP</button>
        ) : (
          <button
            className="signup-btn"
            disabled
            style={{ backgroundColor: "var(--grey)" }}
          >
            SIGN UP
          </button>
        )}
      </span>
    </form>
  );
};
export default SignupModal;
