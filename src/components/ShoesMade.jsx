import Info from "./Info";
import Image from "./Image";
import infoArray from "../arrays/infoArray";

const ShoesMade = () => {
  const leftInfoDisplay = infoArray[0].map((item) => (
    <Info key={item.id} {...item} />
  ));
  const rightInfoDisplay = infoArray[1].map((item) => (
    <Info key={item.id} {...item} />
  ));

  return (
    <section className="shoe-made">
      <div>
        <h2>See how your shoes are made</h2>
        <p>
          Urna, felis enim orci accumsan urna blandit egestas mattis egestas
          feugiat viverra ornare donec adipiscing semper aliquet integer risus
          leo volutpat nulla enim ultrices
        </p>
      </div>
      <div className="shoe-made-container">
        <span>{leftInfoDisplay}</span>
        <Image
          source={"./images/home-page/how-shoes-are-made.png"}
          alter={"How shoe is made"}
        />
        <span>{rightInfoDisplay}</span>
      </div>
    </section>
  );
};

export default ShoesMade;
