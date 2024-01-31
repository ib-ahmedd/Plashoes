import FootBetter from "./FootBetter";
import FootIcons from "./FootIcons";
import FootLinks from "./FootLinks";
import FootEnd from "./FootEnd";
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
