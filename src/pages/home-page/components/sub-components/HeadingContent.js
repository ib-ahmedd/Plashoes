const HeadingContent = ({ heading, content }) => {
  return (
    <div className="heading-content">
      <h3>{heading}</h3>
      <p>{content}</p>
    </div>
  );
};
export default HeadingContent;
