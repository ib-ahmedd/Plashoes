const Info = ({ id, heading, info }) => {
  return (
    <div className="info">
      <p id="info-num">{id}</p>
      <h3>{heading}</h3>
      <p>{info}</p>
    </div>
  );
};

export default Info;
