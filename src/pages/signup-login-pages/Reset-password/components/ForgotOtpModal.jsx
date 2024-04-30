import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../App";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { ForgotContext } from "../ForgotPasswordPage";

const ForgotOtpModal = () => {
  const { otp, handleChange, email, setResetToken } = useContext(ForgotContext);
  const { handleNetworkErr } = useContext(AppContext);
  const [style, setStyle] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [count, setCount] = useState(30);

  const navigate = useNavigate();
  const { state } = useLocation();

  async function submitOtp() {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/verify-otp",
        {
          code: otp,
          email,
        }
      );
      if (response.status && response.status === 200) {
        setResetToken(response.data);
        navigate("/forgot-password/reset", {
          state: true,
          replace: true,
        });
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
      if (err.code === "ERR_NETWORK") {
        handleNetworkErr();
      } else if (err.code === "ERR_BAD_REQUEST") {
        setError("Incorrect OTP!");
      }
    }
  }

  async function resendOtp() {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        {
          email: email,
        }
      );
      if (response.status === 201) {
        setCount(30);
      }
    } catch (err) {
      console.log(err);
      handleNetworkErr();
    }
  }

  useEffect(() => {
    if (!state) {
      navigate("/login");
    }
  }, [navigate, state]);

  useEffect(() => {
    const countInterval = setInterval(() => {
      setCount((prevState) => prevState - 1);
    }, 1000);
    if (count === 0) {
      clearInterval(countInterval);
    }
    setStyle({ transform: "translateX(0)" });
    return () => {
      clearInterval(countInterval);
    };
  }, [count]);
  return (
    <form
      className="forgot-otp"
      style={style}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <p className="sent-code">
        We have sent a code to your email: {email}, enter code to continue
      </p>
      <input
        type="password"
        name="otp"
        id="otp"
        value={otp}
        onChange={handleChange}
        maxLength={4}
      />
      <span className="btn-err">
        {error && <p className="err">{error}</p>}
        {!loading ? (
          <button className="verify-btn" onClick={submitOtp}>
            VERIFY OTP
          </button>
        ) : (
          <button
            className="verify-btn"
            disabled
            style={{ backgroundColor: "var(--grey)" }}
          >
            Loading...
          </button>
        )}
      </span>
      <span className="resend">
        <p>Didn't recieve code? </p>
        {count > 0 ? (
          <button
            className="resend-btn"
            disabled
            style={{ color: "var(--grey)" }}
          >
            Resend OTP{`(${count})`}
          </button>
        ) : (
          <button className="resend-btn" onClick={resendOtp}>
            Resend OTP
          </button>
        )}
      </span>
    </form>
  );
};
export default ForgotOtpModal;
