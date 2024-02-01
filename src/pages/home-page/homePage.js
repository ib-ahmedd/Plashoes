import HomePageAbout from "./components/HomePageAbout";
import HomeShoesMade from "./components/HomeShoesMade";
import SiteIntro from "./components/SiteIntro";
import HomeShop from "./components/HomeShop";
import HomeRecycle from "./components/HomeRecycle";
import HomeCustomers from "./components/HomeCustomers";
import BestSellers from "./components/BestSellers";
import NewArrivals from "./components/NewArrivals";
const HomePage = () => {
  return (
    <div className="home-page">
      <main className="home-body">
        <SiteIntro />
        <HomePageAbout />
        <HomeShoesMade />
        <BestSellers />
        <HomeShop />
        <NewArrivals />
        <HomeRecycle />
        <HomeCustomers />
      </main>
    </div>
  );
};

export default HomePage;
