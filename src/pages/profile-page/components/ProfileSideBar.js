import profileSideBarArray from "../../../arrays/profileSideBarArray";
import SideBarBtn from "./SideBarBtn";

const ProfileSideBar = () => {
  const sideBarButtons = profileSideBarArray.map((item) => (
    <SideBarBtn key={item.text} {...item} />
  ));
  return (
    <section className="profile-sidebar">
      <div className="profile-sidebar-btns">{sideBarButtons}</div>
      <button className="profile-logout">Log Out</button>
    </section>
  );
};
export default ProfileSideBar;
