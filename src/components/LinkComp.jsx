import { Link } from "react-router-dom";
const LinkComp = ({ text, path }) => {
  return (
    <div className="link">
      <Link to={path}>{text}</Link>
    </div>
  );
};

export default LinkComp;
