import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import profileSideBarArray from "../../../arrays/profileSideBarArray";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import OrderDetails from "../sub-pages/order-details/OrderDetails";
import Review from "../sub-pages/review/Review";
import { useEffect, useState } from "react";

const ProfileInfo = ({ setMenuOpen }) => {
  const routes = profileSideBarArray.map((item) => (
    <Route key={item.id} {...item} />
  ));

  const [subHeading, setSubHeading] = useState("");
  const { pathname, state } = useLocation();
  const pathArray = pathname.split("/");
  const currentPath = pathArray[pathArray.length - 1];
  const heading = profileSideBarArray.find((item) => item.path === currentPath);
  const text = heading && heading.text;
  const navigate = useNavigate();

  function handleOpenMenu() {
    setMenuOpen(true);
    document.body.classList.add("no-scroll");
  }
  useEffect(() => {
    if (pathname.includes("orders/")) {
      setSubHeading("Order details");
    } else if (pathname.includes("reviews/")) {
      setSubHeading("Review Product");
    }
  }, [pathname]);
  return (
    <section className="profile-info">
      {text ? (
        <span className="dropDown-heading">
          <button className="toggleSideBar" onClick={handleOpenMenu}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <h1>{text}</h1>
        </span>
      ) : (
        <span className="back-order-details">
          <button
            onClick={() => {
              navigate(state.cLink);
            }}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <h1>{subHeading}</h1>
        </span>
      )}

      <Routes>
        {routes}
        <Route path="orders/:id" element={<OrderDetails />} />
        <Route path="reviews/:id" element={<Review />} />
      </Routes>
    </section>
  );
};
export default ProfileInfo;
