import CartIcon from "./components/CartIcon";
import LinkComp from "../../components/LinkComp";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState({});
  const [closeMenu, setCloseMenu] = useState({});

  const openMenu = () => {
    setMenuOpen({ transform: "translateX(0)" });
    setCloseMenu({
      display: "block",
      position: "fixed",
      width: "100%",
      right: "0",
      bottom: "0",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: "1",
    });
  };

  return (
    <div className="navbar">
      <button onClick={openMenu} className="navbar-button">
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div
        className="closeMenu"
        style={closeMenu}
        onClick={() => {
          setMenuOpen({});
          setCloseMenu({});
        }}
      ></div>
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
      <div className="navbar-center widthh" style={isMenuOpen}>
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
      <CartIcon icon={faCartShopping} />
    </div>
  );
};

export default NavBar;
