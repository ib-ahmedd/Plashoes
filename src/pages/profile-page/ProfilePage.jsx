import ProfileSideBar from "./components/ProfileSideBar";
import ProfileInfo from "./components/ProfileInfo";

import "../../assets/styles/profile/profile-style.css";
import "../../assets/styles/profile/profile-laptop-style.css";
import "../../assets/styles/profile/profile-tab-style.css";
import "../../assets/styles/profile/profile-mobile-style.css";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { useLocation, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, appLoaded } = useContext(AppContext);
  const { pathname } = useLocation();
  useEffect(() => {
    if (appLoaded && !isLoggedIn) {
      navigate("/login", { state: "/profile/account" });
    }
  }, [appLoaded, isLoggedIn, navigate]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);
  return (
    <main className="profile-page">
      <ProfileSideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <ProfileInfo setMenuOpen={setMenuOpen} />
    </main>
  );
};
export default ProfilePage;
