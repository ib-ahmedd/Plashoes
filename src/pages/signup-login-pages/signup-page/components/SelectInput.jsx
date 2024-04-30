import { useContext, useEffect, useState } from "react";
import { SignupPageContext } from "../SignupPage";

const SelectInput = ({ title, options, placeholder, must }) => {
  const name = title.toLowerCase();
  const { handleInputs, inputs, submitted } = useContext(SignupPageContext);
  const [errorSytle, setErrorStyle] = useState({});
  const selectOptions = options.map((item) => (
    <option key={item.name} value={item.name}>
      {item.name}
    </option>
  ));
  useEffect(() => {
    if (submitted && !inputs[name]) {
      setErrorStyle({
        border: "2px solid rgb(204, 68, 68)",
        backgroundColor: "rgba(255, 0, 0, 0.1)",
      });
    } else if (submitted && inputs[name]) {
      setErrorStyle({});
    }
  }, [submitted, inputs, name]);
  return (
    <div className="select-input">
      <label htmlFor={title}>
        {title} {must && "*"}
      </label>
      <select
        id={title}
        autoComplete="on"
        name={name}
        value={inputs[name]}
        onChange={handleInputs}
        style={errorSytle}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {selectOptions}
      </select>
    </div>
  );
};
export default SelectInput;
