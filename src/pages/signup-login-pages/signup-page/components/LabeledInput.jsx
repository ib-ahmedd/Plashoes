import { useCallback, useContext, useEffect, useState } from "react";
import { SignupPageContext } from "../SignupPage";

const LabeledInput = ({ type, name, label, placeholder }) => {
  const { handleInputs, inputs, submitted, setSubmitted, checks } =
    useContext(SignupPageContext);
  const [errorSytle, setErrorStyle] = useState({});

  const checkError = useCallback(() => {
    if (submitted && !inputs[name]) {
      setErrorStyle({
        border: "2px solid rgb(204, 68, 68)",
        backgroundColor: "rgba(255, 0, 0, 0.1)",
      });
    } else if (submitted && inputs[name]) {
      setErrorStyle({});
    }
    setSubmitted(false);
  }, [submitted, inputs, setSubmitted, name]);

  const checkErrorMessage = useCallback(
    (name) => {
      const check = checks[name];
      if (submitted && check && check !== true) {
        setErrorStyle({
          border: "2px solid rgb(204, 68, 68)",
          backgroundColor: "rgba(255, 0, 0, 0.1)",
        });
      } else if (
        submitted &&
        name === "passwordConf" &&
        checks["password"] === "passwords don't match"
      ) {
        setErrorStyle({
          border: "2px solid rgb(204, 68, 68)",
          backgroundColor: "rgba(255, 0, 0, 0.1)",
        });
      }
    },
    [checks, submitted]
  );
  useEffect(() => {
    checkError();
    checkErrorMessage(name);
  }, [checkError, checkErrorMessage, name]);

  return (
    <div className="labeled-input">
      <span>
        <label htmlFor={name}>{label}*</label>
      </span>
      <input
        autoCapitalize="on"
        autoComplete="on"
        id={name}
        style={errorSytle}
        type={type}
        name={name}
        placeholder={placeholder}
        className={name}
        value={inputs[name]}
        onChange={handleInputs}
      />
    </div>
  );
};
export default LabeledInput;
