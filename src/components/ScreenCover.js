const ScreenCover = ({ setMenuOpen, setCloseMenu, closeMenu }) => {
  return (
    <div
      className="closeMenu"
      style={closeMenu}
      onClick={() => {
        setMenuOpen({});
        setCloseMenu({});
      }}
    ></div>
  );
};
export default ScreenCover;
