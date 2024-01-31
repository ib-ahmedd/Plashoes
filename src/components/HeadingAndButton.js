const HeadingAndButton = ({ heading, button }) => {
  return (
    <div className="heading-button">
      <h2>{heading}</h2>
      <a href="/">{button}</a>
    </div>
  );
};
export default HeadingAndButton;
