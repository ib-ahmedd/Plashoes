import NavBar from "./pages/navbar/NavBar";
import HomePage from "./pages/home-page/HomePage";
import ShopPage from "./pages/shop-page/ShopPage";
import Lookbook from "./pages/lookbook/Lookbook";
import Footer from "./pages/footer/Footer";
import { Route, Routes } from "react-router-dom";
import SearchBar from "./pages/navbar/SearchBar";
function App() {
  return (
    <>
      <NavBar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop-men" element={<ShopPage />} />
        <Route path="/shop-women" element={<h2>Shop women</h2>} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="*" element={<h2>Not found</h2>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
