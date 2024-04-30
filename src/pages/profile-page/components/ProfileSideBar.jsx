import { useContext } from "react";
import profileSideBarArray from "../../../arrays/profileSideBarArray";
import SideBarBtn from "./SideBarBtn";
import { AppContext } from "../../../App";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const ProfileSideBar = ({ menuOpen, setMenuOpen }) => {
  const navigate = useNavigate();
  const sideBarButtons = profileSideBarArray.map((item) => (
    <SideBarBtn key={item.text} {...item} />
  ));

  const { setLoggedIn, setUser, deleteCookie, setCartRefresh } =
    useContext(AppContext);

  const handleLogOut = () => {
    deleteCookie("userData");
    setLoggedIn(false);
    setUser({});
    setCartRefresh(true);
    navigate("/");
  };
  return (
    <section
      className="profile-sidebar"
      style={menuOpen ? { transform: "translateX(0)" } : {}}
    >
      <button
        className="close-icon"
        onClick={() => {
          setMenuOpen(false);
          document.body.classList.remove("no-scroll");
        }}
      >
        <FontAwesomeIcon icon={faClose} />
      </button>
      <div className="profile-sidebar-btns">{sideBarButtons}</div>
      <button className="profile-logout" onClick={handleLogOut}>
        Log Out
      </button>
    </section>
  );
};
export default ProfileSideBar;
