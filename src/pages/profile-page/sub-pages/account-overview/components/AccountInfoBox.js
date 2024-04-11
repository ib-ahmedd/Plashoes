const AccountInfoBox = ({ title, info }) => {
  return (
    <div className="acc-info-box">
      <h2>{title}</h2>
      <div>{info}</div>
    </div>
  );
};
export default AccountInfoBox;
