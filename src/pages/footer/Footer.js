import FootBetter from "./components/FootBetter";
import FootIcons from "./components/FootIcons";
import FootLinks from "./components/FootLinks";
import FootEnd from "./components/FootEnd";
const Footer = () => {
  return (
    <footer className="footer">
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
