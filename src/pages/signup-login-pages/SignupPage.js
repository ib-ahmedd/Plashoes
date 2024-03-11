import SignupModal from "./components/SignupModal";

import "../../assets/styles/login-signup-pages/login-signup-style.css";
import "../../assets/styles/login-signup-pages/login-signup-tab-style.css";
import "../../assets/styles/login-signup-pages/login-signup-mobile-style.css";
import { createContext, useRef, useState } from "react";

export const SignupPageContext = createContext("");
const SignupPage = () => {
  const inputFields = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    passwordConf: "",
    code: "NG +234",
    phone: "",
    gender: "",
    country: "Nigeria NG",
    postalcode: "",
    address: "",
  };
  const inputsRef = useRef(inputFields);
  const [inputs, setInputs] = useState(inputFields);
  const [termsChecked, setTermsChecked] = useState(false);
  const [formComplete, setFormComplete] = useState(false);

  const handleTermsChecked = () => {
    setTermsChecked((prevState) => !prevState);
  };
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => {
      return { ...prevState, [name]: value };
    });
    inputsRef.current = { ...inputsRef.current, [name]: value };

    const inputsArray = Object.entries(inputsRef.current);

    const filledInputs = inputsArray.filter((item) => item[1] !== "");
    if (filledInputs.length === 12) {
      setFormComplete(true);
    } else {
      setFormComplete(false);
    }

    const { email, phone, postalcode, password, passwordConf } =
      inputsRef.current;
    if (!email.includes("@") || !email.includes(".com")) {
      setFormComplete(false);
    }
    if (password !== passwordConf) {
      setFormComplete(false);
    }
    if (inputs.phone !== "") {
      if (isNaN(inputs.phone)) {
        setFormComplete(false);
      } else if (
        phone.length < 10 ||
        (phone.length === 11 && phone[0] !== "0") ||
        phone.length > 11
      ) {
        setFormComplete(false);
      }
    }
    if (postalcode.length !== 6) {
      setFormComplete(false);
    }
  };

  const signupContext = {
    inputs,
    setInputs,
    handleInputs,
    formComplete,
    termsChecked,
    handleTermsChecked,
  };
  return (
    <main className="signup-page">
      <SignupPageContext.Provider value={signupContext}>
        <SignupModal />
      </SignupPageContext.Provider>
    </main>
  );
};
export default SignupPage;
