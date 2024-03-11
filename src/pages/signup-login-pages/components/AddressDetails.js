import LabeledInput from "../../../components/LabeledInput";
import SelectInput from "../../../components/SelectInput";

import { countriesArray } from "../../../arrays/countries";

const AddressDetails = () => {
  return (
    <div className="address-details">
      <h2>Address Details</h2>
      <span className="country-post double">
        <SelectInput
          options={countriesArray}
          placeholder={"Select Country"}
          title={"Country"}
          must={true}
        />
        <LabeledInput
          type={"tel"}
          name={"postalcode"}
          label={"Postal Code"}
          must={true}
        />
      </span>
      <LabeledInput type={"tel"} name={"address"} label={"Shipping Address"} />
    </div>
  );
};
export default AddressDetails;
