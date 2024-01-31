const Logo = ({ source, detail }) => {
  return (
    <div className="logo">
      <img src={source} alt={detail} />
    </div>
  );
};

export default Logo;
