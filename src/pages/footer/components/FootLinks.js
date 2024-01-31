import HeadLinks from "../../../components/HeadLinks";
import footerLinksArray from "../../../arrays/footerLinksArray";
import HeadingContent from "../../../components/HeadingContent";

const FootLinks = () => {
  return (
    <section className="footer-links">
      <HeadingContent
        heading={"PLASHOE"}
        content={
          "Praesent eget tortor sit risus egestas nulla pharetra ornare quis bibendum est bibendum sapien proin nascetu"
        }
      />
      <HeadLinks heading={"Shop"} items={footerLinksArray[0]} />
      <HeadLinks heading={"About"} items={footerLinksArray[1]} />
      <HeadLinks heading={"Need Help?"} items={footerLinksArray[2]} />
    </section>
  );
};

export default FootLinks;
