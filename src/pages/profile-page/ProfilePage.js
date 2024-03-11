import ProfileSideBar from "./components/ProfileSideBar";
import ProfileInfo from "./components/ProfileInfo";

import "../../assets/styles/profile/profile-style.css";
import "../../assets/styles/profile/profile-tab-style.css";
import "../../assets/styles/profile/profile-mobile-style.css";

const ProfilePage = () => {
  return (
    <main className="profile-page">
      <div className="profile-page-content">
        <ProfileSideBar />
        <ProfileInfo />
      </div>
    </main>
  );
};
export default ProfilePage;
