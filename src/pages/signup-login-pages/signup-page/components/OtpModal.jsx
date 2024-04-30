import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../App";
import { SignupPageContext } from "../SignupPage";

const OtpModal = () => {
  const { handleNetworkErr, logUserIn, cartProducts, loginState } =
    useContext(AppContext);
  const { inputs, authToken, email } = useContext(SignupPageContext);
  const [otp, setOtp] = useState("");
  const [style, setStyle] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [count, setCount] = useState(30);

  const path = loginState ? loginState : "/profile/account";

  function handleOtpChange(e) {
    const { value } = e.target;
    setOtp(value);
  }

  async function submitOtp() {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/verify-otp",
        {
          code: otp,
          email: inputs.email,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      if (response.data) {
        const result = await axios.post(
          "http://localhost:5000/api/auth/register",
          {
            ...inputs,
          },
          {
            headers: {
              Authorization: `Bearer ${response.data}`,
            },
          }
        );
        const { data } = result;
        if (data) {
          let itemsPosted = 0;
          if (cartProducts.length > 0) {
            cartProducts.forEach(async (item) => {
              await axios.post(
                "http://localhost:5000/api/add-cart",
                {
                  productId: item.id,
                  userId: data.userInfo.id,
                  quantity: item.quantity,
                },
                {
                  headers: {
                    Authorization: `Bearer ${data.accessToken}`,
                  },
                }
              );
              itemsPosted = itemsPosted + 1;
              if (itemsPosted === cartProducts.length) {
                logUserIn(data, path);
              }
            });
          } else {
            logUserIn(data, path);
          }
        }
      }
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
  }

  async function resendOtp() {
    try {
      const response = await axios.post("http://localhost:4000/send-otp", {
        email: inputs.email,
      });
      if (response.status === 202) {
        setCount(10);
      }
    } catch (err) {
      console.log(err);
      handleNetworkErr();
    }
  }

  useEffect(() => {
    const countInterval = setInterval(() => {
      setCount((prevState) => prevState - 1);
    }, 1000);
    if (count === 0) {
      clearInterval(countInterval);
    }

    return () => {
      clearInterval(countInterval);
    };
  }, [count]);
  useEffect(() => {
    setStyle({ transform: "translateX(0)" });
  }, []);
  return (
    <form
      className="otp-modal"
      onSubmit={(e) => {
        e.preventDefault();
      }}
      style={style}
    >
      <h2>Email Verification</h2>
      <p className="sent-code">
        We have sent a code to your email: {email}, enter code to continue
      </p>
      <input
        type="password"
        name="otp"
        value={otp}
        onChange={handleOtpChange}
      />
      <span className="btn-err">
        {error && <p className="err">{error}</p>}
        {!loading ? (
          <button className="verify-btn" onClick={submitOtp}>
            VERIFY ACCOUNT
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
