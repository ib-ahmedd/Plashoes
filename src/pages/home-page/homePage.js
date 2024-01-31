import HomePageAbout from "./components/HomePageAbout";
import HomeShoesMade from "./components/HomeShoesMade";
import NavBar from "./components/NavBar";
import SiteIntro from "./components/SiteIntro";
import HomeShop from "./components/HomeShop";
import HomeRecycle from "./components/HomeRecycle";
import HomeCustomers from "./components/HomeCustomers";
import Footer from "./components/Footer";
const HomePage = () => {
  return (
    <div className="home-page">
      <NavBar />
      <main className="home-body">
        <SiteIntro />
        <HomePageAbout />
        <HomeShoesMade />
        <HomeShop />
        <HomeRecycle />
        <HomeCustomers />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
