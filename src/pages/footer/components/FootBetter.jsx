import LinkButton from "../../../components/LinkButton";

const FootBetter = () => {
  return (
    <section className="footer-better">
      <div className="head-info-buttons">
        <h2>{"Better for People & the Planet"}</h2>
        <p>
          {
            "Ut eget at et aliquam sit quis nisl, pharetra et ac pharetra est dictum in vulputate"
          }
        </p>
        <span>
          <LinkButton text={"SHOP MEN"} path={"/shop-men"} />
          <LinkButton text={"SHOP WOMEN"} path={"/shop-women"} />
        </span>
      </div>
    </section>
  );
};

export default FootBetter;
