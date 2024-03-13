import { useContext } from "react";
import profileSideBarArray from "../../../arrays/profileSideBarArray";
import SideBarBtn from "./SideBarBtn";
import { AppContext } from "../../../App";
import { useNavigate } from "react-router-dom";

const ProfileSideBar = () => {
  const navigate = useNavigate();
  const sideBarButtons = profileSideBarArray.map((item) => (
    <SideBarBtn key={item.text} {...item} />
  ));

  const { setLoggedIn, setUser } = useContext(AppContext);

  const handleLogOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    setUser({});
    navigate("/login");
  };
  return (
    <section className="profile-sidebar">
      <div className="profile-sidebar-btns">{sideBarButtons}</div>
      <button className="profile-logout" onClick={handleLogOut}>
        Log Out
      </button>
    </section>
  );
};
export default ProfileSideBar;
