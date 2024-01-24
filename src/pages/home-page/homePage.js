import HomePageFirstBody from "./components/HomePageFirstBody";
import NavBar from "./components/NavBar";
import SiteIntro from "./components/SiteIntro";
const HomePage = () => {
  return (
    <div className="home-page">
      <NavBar />
      <SiteIntro />
      <HomePageFirstBody />
    </div>
  );
};

export default HomePage;
