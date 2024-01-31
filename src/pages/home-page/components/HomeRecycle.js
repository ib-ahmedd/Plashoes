import Logo from "../../../components/Logo";
import Image from "../../../components/Image";
const HomeRecycle = () => {
  return (
    <section className="home-recycle">
      <span>
        <p>
          Eu eget felis erat mauris aliquam mattis lacus, arcu leo aliquam
          sapien pulvinar laoreet vulputate sem aliquet phasellus egestas felis,
          est, vulputate morbi massa mauris vestibulum dui odio.
        </p>
        <div className="home-recycle-logo-container">
          <Logo
            source={"./images/home-page/recycled-shoe-badge-1.svg"}
            detail={"logo"}
          />
          <Logo
            source={"./images/home-page/recycled-shoe-badge-2.svg"}
            detail={"logo"}
          />
          <Logo
            source={"./images/home-page/recycled-shoe-badge-3.svg"}
            detail={"logo"}
          />
        </div>
      </span>
      <Image
        source={
          "./images/home-page/recycled-shoe-store-recycled-circle-iamge.jpg"
        }
        alter={"round recycle image"}
      />
    </section>
  );
};

export default HomeRecycle;
