import { createContext, useEffect, useState } from "react";
import EmailModal from "./components/EmailModal";
import ForgotOtpModal from "./components/ForgotOtpModal";
import ResetPassword from "./components/ResetPassword";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

export const ForgotContext = createContext("");

const ForgotPasswordPage = () => {
  const [inputs, setInputs] = useState({
    email: "",
    otp: "",
  });
  const [resetToken, setResetToken] = useState("");
  const [emailEntered, setEmailEntered] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  const ForgotContextValue = {
    email: inputs.email,
    otp: inputs.otp,
    handleChange: handleChange,
    resetToken,
    setResetToken,
    setEmailEntered,
  };

  useEffect(() => {
    if (emailEntered && pathname === "/forgot-password") {
      navigate("/login", { replace: true });
    }
  }, [pathname, emailEntered, navigate]);
  return (
    <main className="forgot-password">
      <ForgotContext.Provider value={ForgotContextValue}>
        {!emailEntered ? (
          <EmailModal />
        ) : (
          <>
            <Routes>
              <Route path="otp" element={<ForgotOtpModal />} />
              <Route path="reset" element={<ResetPassword />} />
            </Routes>
          </>
        )}
      </ForgotContext.Provider>
    </main>
  );
};
export default ForgotPasswordPage;
