import SignupModal from "./components/SignupModal";

import "../../../assets/styles/login-signup-pages/login-signup-style.css";
import "../../../assets/styles/login-signup-pages/login-signup-tab-style.css";
import "../../../assets/styles/login-signup-pages/login-signup-mobile-style.css";
import { createContext, useContext, useState } from "react";
import OtpModal from "./components/OtpModal";
import axios from "axios";
import { AppContext } from "../../../App";

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
    DOB: "",
  };

  const { handleNetworkErr } = useContext(AppContext);
  const [inputs, setInputs] = useState(inputFields);
  const [completedInputs, setCompletedInputs] = useState({});
  const [emptyFields, setEmptyFields] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [otpOnScreen, setOtpOnScreen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [authToken, setAuthToken] = useState("");

  function handleTermsChecked() {
    setTermsChecked((prevState) => !prevState);
  }

  function handleInputs(e) {
    const { name, value } = e.target;
    setInputs((prevState) => {
      return { ...prevState, [name]: value };
    });
    setCompletedInputs((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function errorCheck(value, setError) {
    if (value === "") {
      setError(true);
    } else {
      setError(false);
    }
  }

  function checkFormComplete() {
    const inputsArray = Object.values(completedInputs);
    if (inputsArray.length === 10 && !inputsArray.includes("")) {
      return true;
    } else {
      return false;
    }
  }

  function checkPassword() {
    if (inputs.password.length > 5) {
      if (inputs.passwordConf && inputs.password !== inputs.passwordConf) {
        return "passwords don't match";
      } else {
        return true;
      }
    } else {
      return "Password should be at least 6 characters long";
    }
  }

  function checkPhone() {
    const { phone } = inputs;
    if (phone !== "") {
      if (isNaN(phone)) {
        return "Invalid mobile No";
      } else if (
        phone.length < 10 ||
        (phone.length === 11 && phone[0] !== "0") ||
        phone.length > 11
      ) {
        return "Invalid mobile No";
      } else {
        return true;
      }
    } else {
      return true;
    }
  }
  function checkDate() {
    const currentyear = new Date().getFullYear();
    const inputyear = inputs.DOB.split("-")[0];
    if (inputyear > currentyear || inputyear < currentyear - 100) {
      return "Invalid date";
    } else {
      return true;
    }
  }

  const checks = {
    password: checkPassword(),
    phone: checkPhone(),
    DOB: checkDate(),
  };
  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    const formComplete = checkFormComplete();
    console.log(formComplete);
    const checksArray = Object.values(checks);
    const checkArrayQuery = checksArray.filter((item) => {
      return item !== true;
    });

    if (formComplete) {
      setEmptyFields(false);
      if (checkArrayQuery.length > 0) {
        setInputError(checkArrayQuery[0]);
      } else {
        if (!termsChecked) {
          setInputError("Check terms and conditions");
        } else {
          setInputError(false);
          setLoading(true);
          try {
            const response = await axios.post(
              "http://localhost:5000/api/auth/verify-email",
              { email: inputs.email }
            );
            if (response.data) {
              setAuthToken(response.data);
              setOtpOnScreen(true);
            }
          } catch (err) {
            console.log(err);
            if (err.code === "ERR_BAD_REQUEST") {
              setInputError("Email already registered!");
              setLoading(false);
            } else if (err.code === "ERR_NETWORK") {
              handleNetworkErr();
              setLoading(false);
            }
          }
        }
      }
    } else {
      setEmptyFields(true);
    }
  }

  const signupContext = {
    authToken,
    inputs,
    setInputs,
    handleInputs,
    checkFormComplete,
    termsChecked,
    handleTermsChecked,
    handleSubmit,
    otpOnScreen,
    setOtpOnScreen,
    checks,
    inputError,
    submitted,
    setSubmitted,
    errorCheck,
    emptyFields,
    setEmptyFields,
    loading,
    email: inputs.email,
  };
  return (
    <main className="signup-page">
      <SignupPageContext.Provider value={signupContext}>
        <div className="signup-otp">
          <SignupModal />
          {otpOnScreen && <OtpModal />}
        </div>
      </SignupPageContext.Provider>
    </main>
  );
};
export default SignupPage;
