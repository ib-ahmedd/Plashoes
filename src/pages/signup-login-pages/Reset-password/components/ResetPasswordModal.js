const ResetPasswordModal = ({
  password,
  confPassword,
  handleChange,
  handleSubmit,
  errors,
}) => {
  return (
    <form className="reset-password-modal" onSubmit={handleSubmit}>
      <input
        type="password"
        name="password"
        value={password}
        placeholder="Enter new password"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="confPassword"
        value={confPassword}
        placeholder="Confirm new password"
        onChange={handleChange}
        required
      />
      <span>
        <p>
          {errors.length && "password must be 6 characters or more"}
          {errors.match && "passwords do not match"}
        </p>
        <button>RESET PASSWORD</button>
      </span>
    </form>
  );
};
export default ResetPasswordModal;
