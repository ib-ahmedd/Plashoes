import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../App";
import { SignupPageContext } from "../SignupPage";
import { useNavigate } from "react-router-dom";

const OtpModal = () => {
  const { handleNetworkErr, setUser, setLoggedIn } = useContext(AppContext);
  const { inputs } = useContext(SignupPageContext);
  const [otp, setOtp] = useState("");
  const [style, setStyle] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [count, setCount] = useState(10);

  const navigate = useNavigate();
  const path = "/profile/account";

  const handleOtpChange = (e) => {
    const { value } = e.target;
    setOtp(value);
  };

  const submitOtp = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:4000/verify-otp", {
        otp,
      });
      const data = response.data;
      const stringifiedData = JSON.stringify(data);
      localStorage.setItem("user", stringifiedData);
      const user = JSON.parse(localStorage.getItem("user"));
      setUser(user);
      setLoggedIn(true);
      navigate(path);
    } catch (err) {
      console.log(err);
      if (err.code === "ERR_NETWORK") {
        handleNetworkErr();
        setLoading(false);
      } else if (err.code === "ERR_BAD_REQUEST") {
        setError("Incorrect OTP!");
        setLoading(false);
      }
    }
  };

  const resendOtp = async () => {
    try {
      const response = await axios.post("http://localhost:4000/resend-otp", {
        email: inputs.email,
      });
      if (response.status === 202) {
        setCount(10);
      }
    } catch (err) {
      console.log(err);
      handleNetworkErr();
    }
  };

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
      className="otp-modal"
      onSubmit={(e) => {
        e.preventDefault();
      }}
      style={style}
    >
      <h2>Email Verification</h2>
      <p className="sent-code">We have sent a code to your email</p>
      <input type="text" name="otp" value={otp} onChange={handleOtpChange} />
      <span className="btn-err">
        {error && <p className="err">{error}</p>}
        {!loading ? (
          <button className="verify-btn" onClick={submitOtp}>
            Verify Account
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
export default OtpModal;
