import { useContext } from "react";
import { AppContext } from "../App";

const ApiImage = ({ imgPath, desc }) => {
  const { apiLink } = useContext(AppContext);
  return (
    <div className="image">
      <img src={apiLink + imgPath} alt={desc} />
    </div>
  );
};
export default ApiImage;
