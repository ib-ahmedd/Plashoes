import CartIcon from "./components/CartIcon";
import LinkButton from "../../components/LinkButton";
import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ScreenCover from "../../components/ScreenCover";
import ScrollTopBtn from "../../components/ScrollTopBtn";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../App";
const NavBar = () => {
  const { isLoggedIn } = useContext(AppContext);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { ref, inView } = useInView();
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <div className="navbar" ref={ref}>
        <button onClick={toggleMenu} className="navbar-button">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <LinkButton
          text={
            <img
              src="./images/navbar/navbar-site-logo.svg"
              alt="Site logo"
              className="nav-site-logo"
            />
          }
          path={"/"}
        />
        <div
          className="navbar-center widthh"
          style={{ transform: isMenuOpen && "translateX(0)" }}
        >
          <section className="navbar-left">
            <LinkButton text={"MEN"} path={"/shop-men"} />
            <LinkButton text={"WOMEN"} path={"/shop-women"} />
            <LinkButton text={"COLLECTION"} path={"/collection"} />
            <LinkButton text={"LOOKBOOK"} path={"/lookbook"} />
            <LinkButton text={"SALE"} path={"/sale"} />
          </section>
          <section className="navbar-right">
            <LinkButton text={"OUR STORY"} path={"/our-story"} />
            <LinkButton text={"CONTACT"} path={"/contact"} />
            <span className="profile-icon">
              <LinkButton
                text={<FontAwesomeIcon icon={faUser} />}
                path={isLoggedIn ? "/profile/account" : "/login"}
              />
            </span>
          </section>
        </div>

        <CartIcon />
      </div>
      {isMenuOpen && <ScreenCover toggleMenu={toggleMenu} />}
      <ScrollTopBtn inView={inView} />
    </>
  );
};

export default NavBar;
