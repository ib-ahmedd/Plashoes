import Image from "../../../components/Image";
const FootEnd = () => {
  const year = new Date().getFullYear();
  return (
    <section className="foot-end">
      <p>© {year} Recycled Shoe Store. Powered by Recycled Shoe Store.</p>
      <Image source={"./images/footer/icons.png"} />
    </section>
  );
};
export default FootEnd;
