import { NavLink } from "react-router-dom";
import Image from "../../../components/Image";
const ImgHeadContent = ({ source, detail, heading, content }) => {
  return (
    <section className="img-head-content">
      <Image source={source} alter={detail} />
      <div className="img-head-content-sec">
        <h2>{heading}</h2>
        <span className="img-head-content-shopnow">
          <p>{content}</p>
          <NavLink className="link" to={"/shop-men"}>
            SHOP NOW
          </NavLink>
        </span>
      </div>
    </section>
  );
};

export default ImgHeadContent;
