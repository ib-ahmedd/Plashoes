import LinkButton from "../../../components/LinkButton";
const SiteIntro = () => {
  return (
    <div className="site-intro">
      <section className="site-intro-right">
        <h1>Love the Planet we walk on</h1>
        <p>
          Shoes Preserving your Style, Class and Elegance, as well as Preserving
          the State and Well-Being of the Planet
        </p>
        <span className="intro-link-buttons-container">
          <LinkButton text={"SHOP MEN"} path={"/shop-men"} />
          <LinkButton text={"SHOP WOMEN"} path={"/shop-women"} />
        </span>
      </section>
    </div>
  );
};

export default SiteIntro;
