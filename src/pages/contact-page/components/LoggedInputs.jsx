import { useContext } from "react";
import { AppContext } from "../../../App";

const LoggedInputs = () => {
  const { user } = useContext(AppContext);
  return (
    <>
      <label htmlFor="contactName">Name *</label>
      <input
        type="text"
        name="contactName"
        id="contactName"
        value={user.user_name}
        disabled
        required
      />
      <label htmlFor="contactEmail">Email *</label>
      <input
        type="email"
        name="contactEmail"
        id="contactEmail"
        value={user.email}
        disabled
        required
      />
    </>
  );
};
export default LoggedInputs;
