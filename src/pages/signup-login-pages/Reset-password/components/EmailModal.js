import { useContext, useState } from "react";
import { ForgotContext } from "../ForgotPasswordPage";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmailModal = () => {
  const { email, handleChange, setEmailEntered } = useContext(ForgotContext);

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function submitEmail(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        {
          email,
        }
      );
      if (response.status === 201) {
        setEmailEntered(true);
        navigate("/forgot-password/otp", { state: true, replace: true });
      }
    } catch (err) {
      console.log(err);
      if (err.response && err.response.status === 404) {
        setLoading(false);
        setError(true);
      }
    }
  }
  return (
    <form className="email-modal" onSubmit={submitEmail}>
      <input
        type="email"
        name="email"
        id="email"
        autoComplete="on"
        value={email}
        placeholder="Enter email"
        onChange={handleChange}
      />
      {!loading ? (
        <button>REQUEST PASSWORD RESET</button>
      ) : (
        <button style={{ backgroundColor: "var(--grey)" }}>Loading...</button>
      )}
      {error && <p>Email not registered!</p>}
    </form>
  );
};
export default EmailModal;
