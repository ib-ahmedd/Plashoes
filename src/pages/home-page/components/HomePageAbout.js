import logosArray from "../../../arrays/firstBodyLogosArray";
import Logo from "../../../components/Logo";
import Image from "../../../components/Image";
const HomePageAbout = () => {
  const logosDisplay = logosArray.map((logo) => (
    <Logo key={logo.id} {...logo} />
  ));
  return (
    <section className="homepage-about">
      <div className="about-logos-container">
        <h3>AS SEEN IN:</h3>
        <span>{logosDisplay}</span>
      </div>
      <div className="homepage-about-paragraph">
        <Image source={"./images/home-page/about-pic.jpg"} alter={"shoe"} />
        <div>
          <h2>ABOUT US</h2>
          <h3>Selected materials designed for comfort and sustainability</h3>
          <p>
            Nullam auctor faucibus ridiculus dignissim sed et auctor sed eget
            auctor nec sed elit nunc, magna non urna amet ac neque ut quam enim
            pretium risus gravida ullamcorper adipiscing at ut magna.
          </p>
          <a href="/">READ MORE</a>
        </div>
      </div>
    </section>
  );
};

export default HomePageAbout;
