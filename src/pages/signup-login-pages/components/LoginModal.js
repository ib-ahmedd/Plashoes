import LinkButton from "../../../components/LinkButton";

const LoginModal = ({ handleInputs, details, handleSubmit, style, error }) => {
  return (
    <form className="login-modal" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={details.email}
        onChange={handleInputs}
        style={style}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={details.password}
        onChange={handleInputs}
        style={style}
      />
      <button>Login</button>
      {error && (
        <p className="incorrectDetails">Username or Password incorrect!</p>
      )}
      <span className="not-registered">
        <p>Not registered? </p>
        <LinkButton text={"Create an account"} path={"/signup"} />
      </span>
    </form>
  );
};
export default LoginModal;
