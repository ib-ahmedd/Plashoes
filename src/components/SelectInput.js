import { useContext } from "react";
import { SignupPageContext } from "../pages/signup-login-pages/SignupPage";

const SelectInput = ({ title, options, placeholder, must }) => {
  const { handleInputs, inputs } = useContext(SignupPageContext);
  const selectOptions = options.map((item) => (
    <option key={item.name} value={item.name}>
      {item.name}
    </option>
  ));
  return (
    <div className="select-input">
      <label htmlFor={title}>
        {title} {must && "*"}
      </label>
      <select
        name={title.toLowerCase()}
        value={inputs[title.toLowerCase()]}
        onChange={handleInputs}
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
