import { useEffect } from "react";

const ScreenCover = ({ toggleMenu }) => {
  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
  return <div className="screen-cover" onClick={toggleMenu}></div>;
};
export default ScreenCover;
