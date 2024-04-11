import { useContext } from "react";
import RecentProductModal from "./components/RecentProductModal";
import { AppContext } from "../../../../App";
import NoRecent from "./components/NoRecent";

const RecentlyViewed = () => {
  const { getCookie, user } = useContext(AppContext);
  const recentViewed = getCookie(`${user.id}recent_products`);
  const parsedProducts = recentViewed ? JSON.parse(recentViewed) : [];
  const displayedProducts = parsedProducts.map((item) => (
    <RecentProductModal key={item.id} {...item} />
  ));
  return (
    <section className="recently-viewed">
      {displayedProducts.length > 0 ? displayedProducts : <NoRecent />}
    </section>
  );
};
export default RecentlyViewed;
