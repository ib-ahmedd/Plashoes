import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AppContext } from "../App";

const LinkButton = ({ text, path, state, onlyTab, onlyDesktop }) => {
  const { handleMouseDown } = useContext(AppContext);
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [specificClass, setSpecificClass] = useState("");
  useEffect(() => {
    if (pathname === path) {
      setIsActive(true);
    }

    return () => {
      setIsActive(false);
    };
  }, [pathname, path]);
  useEffect(() => {
    if (onlyTab) {
      setSpecificClass("tab-only-link");
    } else if (onlyDesktop) {
      setSpecificClass("desktop-only-link");
    } else {
      setSpecificClass("");
    }
  }, [onlyTab, onlyDesktop]);
  return (
    <NavLink
      to={path}
      style={{
        color: isActive && "#222",
        backgroundColor: clicked && "var(--clicked-grey)",
      }}
      className={
        isActive
          ? `${specificClass} active-link-btn link-buttons`
          : `${specificClass} link-buttons`
      }
      state={state}
      onMouseDown={() => {
        handleMouseDown(setClicked);
      }}
    >
      {text}
    </NavLink>
  );
};

export default LinkButton;
