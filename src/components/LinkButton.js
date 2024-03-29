import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const LinkButton = ({ text, path }) => {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (pathname === path) {
      setIsActive(true);
    }

    return () => {
      setIsActive(false);
    };
  }, [pathname, path]);
  return (
    <NavLink
      to={path}
      className="link-buttons"
      style={{ color: isActive && "#222" }}
    >
      {text}
    </NavLink>
  );
};

export default LinkButton;
