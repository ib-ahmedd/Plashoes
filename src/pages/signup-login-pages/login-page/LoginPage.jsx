import axios from "axios";
import { useContext, useEffect, useState } from "react";

import "../../../assets/styles/login-signup-pages/login-signup-style.css";
import "../../../assets/styles/login-signup-pages/login-signup-tab-style.css";
import "../../../assets/styles/login-signup-pages/login-signup-mobile-style.css";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../../../App";
import LinkButton from "../../../components/LinkButton";

const LoginPage = () => {
  const [details, setDetails] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [inputStyle, setInputStyle] = useState({});
  const [error, setError] = useState(false);
  const { state } = useLocation();
  const {
    logUserIn,
    handleNetworkErr,
    cartProducts,
    setLoginState,
    loginState,
  } = useContext(AppContext);

  const errorStyle = {
    backgroundColor: "rgb(255, 218, 218)",
    border: "1px solid red",
  };

  function handleInputs(e) {
    const { name, value } = e.target;
    setDetails((prevState) => {
      return { ...prevState, [name]: value };
    });
    setInputStyle({});
    setError(false);
  }

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    try {
      let itemsPosted = 0;
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          ...details,
        }
      );
      const path = loginState ? loginState : "/profile/account";
      const { data } = response;
      if (data) {
        if (cartProducts.length > 0) {
          cartProducts.forEach(async (item) => {
            await axios.post(
              "http://localhost:5000/api/add-cart",
              {
                productId: item.productId,
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
      } else {
        setInputStyle(errorStyle);
        setError(true);
      }
    } catch (err) {
      console.error(err);
      if (err.code === "ERR_NETWORK") {
        handleNetworkErr();
      } else if (err.code === "ERR_BAD_REQUEST") {
        setError(true);
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    setLoginState(state);
  }, [state, setLoginState]);

  return (
    <main className="login-page">
      <form className="login-modal" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          autoComplete="on"
          value={details.email}
          onChange={handleInputs}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          value={details.password}
          onChange={handleInputs}
          style={inputStyle}
        />
        {loading ? (
          <button disabled style={{ backgroundColor: "var(--grey)" }}>
            Loading...
          </button>
        ) : (
          <button>LOGIN</button>
        )}
        {error && (
          <p className="incorrectDetails">Username or Password incorrect!</p>
        )}
        <span className="signup-forgot">
          <LinkButton text={"Sign up"} path={"/signup"} />
          <Link to={"/forgot-password"} replace className="frgt-pwd">
            Forgot password?
          </Link>
        </span>
      </form>
    </main>
  );
};
export default LoginPage;
