import CartIcon from "./sub-components/CartIcon";
import Link from "./sub-components/Link";
import Logo from "./sub-components/Logo";
import React, { useState } from "react";
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
      <button onClick={openMenu}>
        <img
          src="./images/navbar/menu icon.png"
          alt="menu icon"
          width={"30em"}
        />
      </button>
      <div
        className="closeMenu"
        style={closeMenu}
        onClick={() => {
          setMenuOpen({});
          setCloseMenu({});
        }}
      ></div>
      <Logo source={"./images/navbar/site-logo.svg"} detail={"exshoes logo"} />
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
            <Link
              text={
                <img
                  src="./images/navbar/profile icon.png"
                  alt="profile icon"
                  width={"30em"}
                />
              }
            />
          </span>
        </section>
      </div>
      <CartIcon />
    </div>
  );
};

export default NavBar;
