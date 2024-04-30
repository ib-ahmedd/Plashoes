import HomePageAbout from "./components/HomePageAbout";
import ShoesMade from "../../components/ShoesMade";
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
        <ShoesMade />
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
