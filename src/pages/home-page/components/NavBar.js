import CartIcon from "./sub-components/CartIcon";
import Links from "./sub-components/Links";
import Logo from "./sub-components/Logo";
const NavBar = () => {
  return (
    <div className="navbar">
      <section className="navbar-left">
        <Logo />
        <span>
          <Links text={"MEN"} />
          <Links text={"WOMEN"} />
          <Links text={"KIDS"} />
          <Links text={"COLLECTION"} />
          <Links text={"SALE"} />
        </span>
      </section>
      <section className="navbar-right">
        <span>
          <Links text={"OUR STORY"} />
          <Links text={"CONTACT"} />
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
        <CartIcon />
      </section>
    </div>
  );
};

export default NavBar;
