import { useContext, useState } from "react";
import { SignupPageContext } from "../pages/signup-login-pages/SignupPage";

const LabeledInput = ({ type, name, label, placeholder, must, done }) => {
  const { handleInputs, inputs } = useContext(SignupPageContext);
  const [warnStyle, setWarnStyle] = useState(false);
  return (
    <div className="labeled-input">
      <label htmlFor={name}>
        {label} {must && "*"}
      </label>
      <input
        style={{
          border: warnStyle && "2px solid rgb(204, 68, 68)",
          backgroundColor: warnStyle && "rgba(255, 0, 0, 0.1)",
        }}
        type={type}
        name={name}
        placeholder={placeholder}
        className={name}
        value={inputs[name]}
        onChange={handleInputs}
        onBlur={() => {
          console.log(name);
          if (!done) {
            setWarnStyle(true);
          }
        }}
      />
    </div>
  );
};
export default LabeledInput;
