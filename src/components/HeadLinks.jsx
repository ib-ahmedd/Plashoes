import LinkButton from "./LinkButton";

const HeadLinks = ({ heading, items }) => {
  const linksDisplay = items.map((item) => (
    <LinkButton key={item.id} {...item} />
  ));
  return (
    <div className="head-and-links">
      <h3>{heading}</h3>
      <span>{linksDisplay}</span>
    </div>
  );
};
export default HeadLinks;
