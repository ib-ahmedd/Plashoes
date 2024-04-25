import { Link } from "react-router-dom";
import Image from "../../../../components/Image";

const PasswordResetSuccess = () => {
  return (
    <article className="reset-success">
      <Image source={"/images/success-35.png"} alter={"success"} />
      <p>Your password has been updated, use new password to log in.</p>
      <Link to={"/login"} replace>
        Back to login
      </Link>
    </article>
  );
};
export default PasswordResetSuccess;
