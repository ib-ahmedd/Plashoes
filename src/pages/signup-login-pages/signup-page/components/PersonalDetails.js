import LabeledInput from "./LabeledInput";
import SelectInput from "./SelectInput";
import { countriesPhoneArray } from "../../../../arrays/countries";
const PersonalDetails = () => {
  const gendersArray = [{ name: "Male" }, { name: "Female" }];

  return (
    <div className="personal-details">
      <h2>Personal details</h2>
      <span className="name-span double">
        <LabeledInput type={"text"} name={"fname"} label={"First Name"} />
        <LabeledInput type={"text"} name={"lname"} label={"Last Name"} />
      </span>

      <LabeledInput
        type={"email"}
        name={"email"}
        label={"Email"}
        error={"Invalid email"}
      />

      <span className="password-span double">
        <LabeledInput type={"password"} name={"password"} label={"Password"} />
        <LabeledInput
          type={"password"}
          name={"passwordConf"}
          label={"Confirm Password"}
        />
      </span>
      <span className="phone-no-code double">
        <SelectInput
          title={"Code"}
          options={countriesPhoneArray}
          placeholder={"Code"}
          defaultValue={"NG +234"}
        />
        <LabeledInput type={"tel"} name={"phone"} label={"Mobile Number"} />
      </span>
      <span className="gender-DOB double">
        <LabeledInput type={"date"} name={"DOB"} label={"D.O.B"} />
        <SelectInput
          options={gendersArray}
          placeholder={"Select gender"}
          title={"Gender"}
        />
      </span>
    </div>
  );
};
export default PersonalDetails;
