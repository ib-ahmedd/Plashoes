import { useLocation, useNavigate } from "react-router-dom";
import ResetPasswordModal from "./ResetPasswordModal";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import PasswordResetSuccess from "./PasswordResetSuccess";
import { ForgotContext } from "../ForgotPasswordPage";

const ResetPassword = () => {
  const { email, resetToken } = useContext(ForgotContext);
  const { state } = useLocation();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    password: "",
    confPassword: "",
  });
  const [errors, setErrors] = useState({
    match: false,
    length: false,
  });
  const [resetSuccess, setSuccess] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (inputs.password.length > 5) {
        setErrors({ match: false, length: false });
        if (inputs.password === inputs.confPassword) {
          setErrors({
            match: false,
            length: false,
          });
          const response = await axios.patch(
            "http://localhost:5000/api/auth/reset-password",
            {
              email: email,
              password: inputs.password,
            },
            {
              headers: {
                Authorization: `Bearer ${resetToken}`,
              },
            }
          );
          if (response.status && response.status === 201) {
            setSuccess(true);
          }
        } else {
          setErrors((prevState) => {
            return { ...prevState, match: true };
          });
        }
      } else {
        setErrors((prevState) => {
          return { ...prevState, length: true };
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    if (!state) {
      navigate("/login", { replace: true });
    }
  }, [state, navigate]);
  return (
    <main className="reset-password">
      {!resetSuccess ? (
        <ResetPasswordModal
          password={inputs.password}
          confPassword={inputs.confPassword}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      ) : (
        <PasswordResetSuccess />
      )}
    </main>
  );
};
export default ResetPassword;
