import Info from "./sub-components/Info";
import Image from "./sub-components/Image";

const HomeShoesMade = () => {
  const InfoArray = [
    [
      {
        id: "01",
        heading: "Pet canvas",
        info: "Morbi eget bibendum sit adipiscing morbi ac nisl vitae maecenas nulla cursus",
      },
      {
        id: "02",
        heading: "Algae foam + vegan glue",
        info: "Enim tincidunt donec vulputate magna pharetra mattis in",
      },
    ],
    [
      {
        id: "03",
        heading: "Organic cotton",
        info: "A vel ipsum, sed dignissim elementum ultrices amet",
      },
      {
        id: "04",
        heading: "Upcycled plastic bottles ",
        info: "Pellentesque viverra amet netus facilisis amet felis odio tortor orci cursus est",
      },
    ],
  ];

  const leftInfoDisplay = InfoArray[0].map((item) => (
    <Info key={item.id} {...item} />
  ));
  const rightInfoDisplay = InfoArray[1].map((item) => (
    <Info key={item.id} {...item} />
  ));

  return (
    <section className="home-shoe-made">
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
          source={
            "./images/how shoes are made/recycled-shoe-store-how-shoes-are-made-image.png"
          }
          alter={"How shoe is made"}
        />
        <span>{rightInfoDisplay}</span>
      </div>
    </section>
  );
};

export default HomeShoesMade;
