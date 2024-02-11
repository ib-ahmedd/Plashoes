import LinkButton from "./LinkButton";

const HeadingAndButton = ({ heading, button, path }) => {
  return (
    <div className="heading-button">
      <h2>{heading}</h2>
      <LinkButton text={button} path={path} />
    </div>
  );
};
export default HeadingAndButton;
