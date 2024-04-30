import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const SideBarBtn = ({ text, icon, path }) => {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (pathname.includes(path)) {
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
        backgroundColor: isActive && "#e3e3e3",
      }}
    >
      <FontAwesomeIcon icon={icon} />
      {text}
    </NavLink>
  );
};
export default SideBarBtn;
