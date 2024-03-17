import { Route, Routes, useLocation } from "react-router-dom";
import profileSideBarArray from "../../../arrays/profileSideBarArray";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ProfileInfo = () => {
  const routes = profileSideBarArray.map((item) => (
    <Route key={item.id} {...item} />
  ));
  const { pathname } = useLocation();
  const pathArray = pathname.split("/");
  const currentPath = pathArray[pathArray.length - 1];
  const { text } = profileSideBarArray.find(
    (item) => item.path === currentPath
  );
  return (
    <section className="profile-info">
      <span className="dropDown-heading">
        <button className="toggleSideBar">
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
        <h1>{text}</h1>
      </span>
      <Routes>{routes}</Routes>
    </section>
  );
};
export default ProfileInfo;
