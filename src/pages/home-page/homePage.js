import HomePageAbout from "./components/HomePageAbout";
import HomeShoesMade from "./components/HomeShoesMade";
import NavBar from "./components/NavBar";
import SiteIntro from "./components/SiteIntro";
import Shop from "./components/Shop";
import Recycle from "./components/Recycle";
import Customers from "./components/Customers";
const HomePage = () => {
  return (
    <div className="home-page">
      <NavBar />
      <SiteIntro />
      <HomePageAbout />
      <HomeShoesMade />
      <Shop />
      <Recycle />
      <Customers />
    </div>
  );
};

export default HomePage;
