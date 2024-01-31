import LinkButton from "./LinkButton";

const Intro = () => {
  return (
    <section className="site-intro-right">
      <h1>Love the Planet we walk on</h1>
      <p>
        Shoes Preserving your Style, Class and Elegance, as well as Preserving
        the State and Well-Being of the Planet
      </p>
      <span className="intro-link-buttons-container">
        <LinkButton text={"SHOP MEN"} />
        <LinkButton text={"SHOP WOMEN"} />
      </span>
    </section>
  );
};

export default Intro;