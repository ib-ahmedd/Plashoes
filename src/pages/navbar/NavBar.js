import CartIcon from "./components/CartIcon";
import LinkComp from "../../components/LinkComp";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ScreenCover from "../../components/ScreenCover";
import ScrollTopBtn from "../../components/ScrollTopBtn";
import { useInView } from "react-intersection-observer";
const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { ref, inView } = useInView();

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="navbar" ref={ref}>
        <button onClick={toggleMenu} className="navbar-button">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <LinkComp
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
            <LinkComp text={"MEN"} path={"/shop-men"} />
            <LinkComp text={"WOMEN"} path={"/shop-women"} />
            <LinkComp text={"COLLECTION"} path={"/collection"} />
            <LinkComp text={"LOOKBOOK"} path={"/lookbook"} />
            <LinkComp text={"SALE"} path={"/sale"} />
          </section>
          <section className="navbar-right">
            <LinkComp text={"OUR STORY"} path={"/our-story"} />
            <LinkComp text={"CONTACT"} path={"/contact"} />
            <span className="profile-icon">
              <LinkComp
                text={<FontAwesomeIcon icon={faUser} path={"/profile"} />}
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
