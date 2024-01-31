import HomePageAbout from "./components/HomePageAbout";
import HomeShoesMade from "./components/HomeShoesMade";
import SiteIntro from "./components/SiteIntro";
import HomeShop from "./components/HomeShop";
import HomeRecycle from "./components/HomeRecycle";
import HomeCustomers from "./components/HomeCustomers";
const HomePage = () => {
  return (
    <div className="home-page">
      <main className="home-body">
        <SiteIntro />
        <HomePageAbout />
        <HomeShoesMade />
        <HomeShop />
        <HomeRecycle />
        <HomeCustomers />
      </main>
    </div>
  );
};

export default HomePage;
