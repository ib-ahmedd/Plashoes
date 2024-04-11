import axios from "axios";
import { useContext, useState } from "react";

import "../../assets/styles/login-signup-pages/login-signup-style.css";
import "../../assets/styles/login-signup-pages/login-signup-tab-style.css";
import "../../assets/styles/login-signup-pages/login-signup-mobile-style.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import LinkButton from "../../components/LinkButton";

const LoginPage = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [inputStyle, setInputStyle] = useState({});
  const [error, setError] = useState(false);
  const {
    setLoggedIn,
    setUser,
    handleNetworkErr,
    cartProducts,
    setCartRefresh,
  } = useContext(AppContext);
  const errorStyle = {
    backgroundColor: "rgb(255, 218, 218)",
    border: "1px solid red",
  };
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setDetails((prevState) => {
      return { ...prevState, [name]: value };
    });
    setInputStyle({});
    setError(false);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      let itemsPosted = 0;
      const response = await axios.post("http://localhost:4000/login", {
        ...details,
      });
      const path = "/profile/account";
      const { data } = response;
      if (data) {
        const stringifiedData = JSON.stringify(data);
        localStorage.setItem("user", stringifiedData);
        const user = JSON.parse(localStorage.getItem("user"));
        if (cartProducts.length > 0) {
          cartProducts.forEach(async (item) => {
            await axios.post(
              "http://localhost:5000/add-cart",
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
              setUser(user);
              setLoggedIn(true);
              setCartRefresh(true);
              navigate(path, { replace: true });
            }
          });
        } else {
          setUser(user);
          setLoggedIn(true);
          setCartRefresh(true);
          navigate(path, { replace: true });
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
  };
  return (
    <main className="login-page">
      <form className="login-modal" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={details.email}
          onChange={handleInputs}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={details.password}
          onChange={handleInputs}
          style={inputStyle}
        />
        {loading ? (
          <button disabled style={{ backgroundColor: "var(--grey)" }}>
            Loading...
          </button>
        ) : (
          <button>Login</button>
        )}
        {error && (
          <p className="incorrectDetails">Username or Password incorrect!</p>
        )}
        <span className="not-registered">
          <p>Not registered? </p>
          <LinkButton text={"Create an account"} path={"/signup"} />
        </span>
      </form>
    </main>
  );
};
export default LoginPage;
