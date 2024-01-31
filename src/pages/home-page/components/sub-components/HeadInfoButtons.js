import LinkButton from "./LinkButton";

const HeadInfoButtons = ({ heading, info, button1, button2 }) => {
  return (
    <div className="head-info-buttons">
      <h2>{heading}</h2>
      <p>{info}</p>
      <span>
        <LinkButton text={button1} />
        <LinkButton text={button2} />
      </span>
    </div>
  );
};

export default HeadInfoButtons;
