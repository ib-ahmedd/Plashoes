import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const SideBarBtn = ({ text, icon, path }) => {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (pathname === "/profile/" + path) {
      setIsActive(true);
    }

    return () => {
      setIsActive(false);
    };
  }, [pathname, path]);
  return (
    <NavLink
      to={"/profile/" + path}
      style={{
        backgroundColor: isActive && "#d4d4d4",
        color: isActive && "black",
      }}
    >
      <FontAwesomeIcon icon={icon} />
      {text}
    </NavLink>
  );
};
export default SideBarBtn;
