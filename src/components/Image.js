const Image = ({ source, alter }) => {
  return (
    <div className="image">
      <img src={source} alt={alter} />
    </div>
  );
};

export default Image;
