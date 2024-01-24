import logosArray from "../../../firstBodyLogosArray";
import Logo from "./sub-components/Logo";
import Image from "./sub-components/Image";
const HomePageFirstBody = () => {
  const logosDisplay = logosArray.map((logo) => (
    <Logo key={logo.id} {...logo} />
  ));
  return (
    <section className="homepage-firstbody">
      <div className="firstbody-logos-container">
        <h3>AS SEEN IN:</h3>
        <span>{logosDisplay}</span>
      </div>
      <div className="homepage-brief-about">
        <Image
          source={
            "./images/home page first body/recycled-shoe-store-home-about-image.jpg"
          }
          alter={"shoe"}
        />
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

export default HomePageFirstBody;
