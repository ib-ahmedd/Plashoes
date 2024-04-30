import { Link } from "react-router-dom";
import Image from "../../../../components/Image";
import { useContext } from "react";
import { AppContext } from "../../../../App";

const PasswordResetSuccess = () => {
  const { loginState } = useContext(AppContext);
  return (
    <article className="reset-success">
      <Image source={"/images/success-35.png"} alter={"success"} />
      <p>Your password has been updated, use new password to log in.</p>
      <Link to={"/login"} state={loginState} replace>
        Back to login
      </Link>
    </article>
  );
};
export default PasswordResetSuccess;
