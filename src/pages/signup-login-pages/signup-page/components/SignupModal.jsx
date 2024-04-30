import { Link } from "react-router-dom";
import AddressDetails from "./AddressDetails";
import PersonalDetails from "./PersonalDetails";
import { useContext } from "react";
import { SignupPageContext } from "../SignupPage";

const SignupModal = () => {
  const {
    termsChecked,
    handleTermsChecked,
    otpOnScreen,
    handleSubmit,
    emptyFields,
    inputError,
    loading,
  } = useContext(SignupPageContext);

  return (
    <form
      className="signup-modal"
      onSubmit={handleSubmit}
      style={otpOnScreen ? { transform: "translate(-200%)" } : {}}
    >
      <span>
        <h1>Sign up</h1>
      </span>
      <PersonalDetails />
      <AddressDetails />
      <span className="terms">
        <input
          type="checkbox"
          name="terms"
          id="terms"
          checked={termsChecked}
          onChange={handleTermsChecked}
        ></input>
        <label htmlFor="terms">
          I agree to the <Link to={"/terms"}>terms and conditions</Link>
        </label>
      </span>
      <span>
        {emptyFields && <h3>Fill all input fields!</h3>}
        {!emptyFields && inputError && <h3>{inputError}</h3>}
        {!loading ? (
          <button className="signup-btn">SIGN UP</button>
        ) : (
          <button
            style={{ backgroundColor: "var(--grey)" }}
            disabled
            className="signup-btn"
          >
            Loading...
          </button>
        )}
      </span>
    </form>
  );
};
export default SignupModal;
