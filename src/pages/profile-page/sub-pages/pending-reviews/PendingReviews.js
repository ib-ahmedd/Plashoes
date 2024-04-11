import PendingProduct from "./components/PendingProduct";
import { useContext } from "react";
import { AppContext } from "../../../../App";
import useGet from "../../../../hooks/useGet";
import LoadingModal from "./components/LoadingModal";

const PendingReviews = () => {
  const { user, accessToken } = useContext(AppContext);
  const { loading, result } = useGet(
    `/pending-reviews/${user.id}`,
    accessToken
  );

  const displayedProducts = result.map((item) => (
    <PendingProduct key={item.id} {...item} />
  ));
  return (
    <section className="pending-reviews">
      {loading ? (
        <LoadingModal />
      ) : result.length > 0 ? (
        displayedProducts
      ) : (
        <p className="no-reviews">No pending reviews</p>
      )}
    </section>
  );
};
export default PendingReviews;
