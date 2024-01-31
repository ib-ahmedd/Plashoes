import CartIcon from "./components/CartIcon";
import Link from "../../components/Link";
import Logo from "../../components/Logo";
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
      <Logo
        source={"./images/navbar/navbar-site-logo.svg"}
        detail={"exshoes logo"}
      />
      <div className="navbar-center widthh" style={isMenuOpen}>
        <section className="navbar-left">
          <Link text={"MEN"} />
          <Link text={"WOMEN"} />
          <Link text={"COLLECTION"} />
          <Link text={"LOOKBOOK"} />
          <Link text={"SALE"} />
        </section>
        <section className="navbar-right">
          <Link text={"OUR STORY"} />
          <Link text={"CONTACT"} />
          <span className="profile-icon">
            <Link text={<FontAwesomeIcon icon={faUser} />} />
          </span>
        </section>
      </div>
      <CartIcon icon={faCartShopping} />
    </div>
  );
};

export default NavBar;
