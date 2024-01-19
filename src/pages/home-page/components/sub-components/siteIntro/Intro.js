import LinkButton from "./LinkButton";

const Intro = () => {
  return (
    <section className="site-intro-right">
      <h1>Perfect Shoes for every Individuality</h1>
      <p>Walking Free Since 1978</p>
      <span className="intro-link-buttons-container">
        <LinkButton text={"SHOP MEN"} />
        <LinkButton text={"SHOP WOMEN"} />
      </span>
    </section>
  );
};

export default Intro;
