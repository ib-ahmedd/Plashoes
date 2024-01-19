import CartIcon from "./sub-components/navbar/CartIcon";
import Links from "./sub-components/navbar/Links";
import Logo from "./sub-components/navbar/Logo";
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
      <Logo />
      <div className="navbar-center widthh" style={isMenuOpen}>
        <section className="navbar-left">
          <Links text={"MEN"} />
          <Links text={"WOMEN"} />
          <Links text={"KIDS"} />
          <Links text={"COLLECTION"} />
          <Links text={"SALE"} />
        </section>
        <section className="navbar-right">
          <Links text={"OUR STORY"} />
          <Links text={"CONTACT"} />
          <span className="profile-icon">
            <Links
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
