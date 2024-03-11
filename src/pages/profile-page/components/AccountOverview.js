import AccountInfoBox from "./AccountInfoBox";
import { useContext } from "react";
import { LoginContext } from "../../../App";

const AccountOverview = () => {
  const { user } = useContext(LoginContext);
  const { user_name, email, address, mobile_no, country_code } = user;
  return (
    <section className="acc-overview">
      <div className="acc-info-cont">
        <AccountInfoBox
          title={"ACCOUNT DETAILS"}
          info={
            <>
              <h3>{user_name}</h3> <p>{email}</p>
            </>
          }
        />
        <AccountInfoBox
          title={"ADDRESS BOOK"}
          info={
            <>
              <h3>Your default shipping address:</h3>
              <p>{user_name}</p>
              <p>{address}</p>
              <p>{"+" + country_code + mobile_no}</p>
            </>
          }
        />
      </div>
    </section>
  );
};
export default AccountOverview;
