import Image from "./sub-components/Image";
const FootEnd = () => {
  const year = new Date().getFullYear();
  console.log(year);
  return (
    <section className="foot-end">
      <p>{year} Recycled Shoe Store. Powered by Recycled Shoe Store.</p>
      <Image source={"./images/footer/payment-icons.png"} />
    </section>
  );
};
export default FootEnd;
