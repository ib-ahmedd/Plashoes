import FootBetter from "./components/FootBetter";
import FootIcons from "./components/FootIcons";
import FootLinks from "./components/FootLinks";
import FootEnd from "./components/FootEnd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const [hidden, setHidden] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/login" || pathname === "/signup") {
      setHidden(true);
    } else {
      setHidden(false);
    }
  }, [pathname]);
  return (
    <footer className="footer" style={hidden ? { display: "none" } : {}}>
      <FootBetter />
      <div>
        <FootIcons />
        <FootLinks />
      </div>
      <FootEnd />
    </footer>
  );
};

export default Footer;
