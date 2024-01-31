import HeadingAndButton from "./sub-components/HeadingAndButton";
const Shop = () => {
  return (
    <section className="shop">
      <HeadingAndButton heading={"MEN"} button={"SHOP MEN"} />
      <HeadingAndButton heading={"WOMEN"} button={"SHOP WOMEN"} />
    </section>
  );
};

export default Shop;
