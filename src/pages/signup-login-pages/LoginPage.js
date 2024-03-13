import LoginModal from "./components/LoginModal";
import axios from "axios";
import { useContext, useState } from "react";

import "../../assets/styles/login-signup-pages/login-signup-style.css";
import "../../assets/styles/login-signup-pages/login-signup-tab-style.css";
import "../../assets/styles/login-signup-pages/login-signup-mobile-style.css";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";

const LoginPage = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({ email: "", password: "" });
  const [inputStyle, setInputStyle] = useState({});
  const [error, setError] = useState(false);
  const { setLoggedIn, setUser } = useContext(AppContext);
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
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        ...details,
      });
      const path = "/profile/account";
      const { data } = response;
      if (data) {
        const stringifiedData = JSON.stringify(data);
        localStorage.setItem("user", stringifiedData);
        const user = JSON.parse(localStorage.getItem("user"));
        setUser(user);
        setLoggedIn(true);
        navigate(path);
      } else {
        setInputStyle(errorStyle);
        setError(true);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <main className="login-page">
      <LoginModal
        handleInputs={handleInputs}
        details={details}
        handleSubmit={handleSubmit}
        style={inputStyle}
        error={error}
      />
    </main>
  );
};
export default LoginPage;
