import LabeledInput from "../../../components/LabeledInput";
import SelectInput from "../../../components/SelectInput";
import { countriesPhoneArray } from "../../../arrays/countries";
const PersonalDetails = () => {
  const gendersArray = [{ name: "Male" }, { name: "Female" }];

  return (
    <div className="personal-details">
      <h2>Personal details</h2>
      <span className="name-span double">
        <LabeledInput
          type={"text"}
          name={"fname"}
          label={"First Name"}
          must={true}
        />
        <LabeledInput
          type={"text"}
          name={"lname"}
          label={"Last Name"}
          must={true}
        />
      </span>

      <LabeledInput type={"email"} name={"email"} label={"Email"} must={true} />

      <span className="password-span double">
        <LabeledInput
          type={"password"}
          name={"password"}
          label={"Password"}
          must={true}
        />
        <LabeledInput
          type={"password"}
          name={"passwordConf"}
          label={"Confirm Password"}
          must={true}
        />
      </span>
      <span className="phone-no-code double">
        <SelectInput
          title={"Code"}
          options={countriesPhoneArray}
          placeholder={"Code"}
          defaultValue={"NG +234"}
        />
        <LabeledInput
          type={"tel"}
          name={"phone"}
          label={"Mobile Number"}
          done={false}
        />
      </span>
      <span className="gender-DOB double">
        <LabeledInput
          type={"date"}
          name={"DOB"}
          label={"D.O.B"}
          must={true}
          done={false}
        />
        <SelectInput
          options={gendersArray}
          placeholder={"Select gender"}
          title={"Gender"}
          must={true}
        />
      </span>
    </div>
  );
};
export default PersonalDetails;
