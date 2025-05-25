const ApiImage = ({ imgPath, desc }) => {
  return (
    <div className="image">
      <img src={imgPath} alt={desc} />
    </div>
  );
};
export default ApiImage;
