import HeadingAndButton from "../../../components/HeadingAndButton";
const HomeShop = () => {
  return (
    <section className="home-shop">
      <HeadingAndButton
        heading={"MEN"}
        button={"SHOP MEN"}
        path={"/shop-men"}
      />
      <HeadingAndButton
        heading={"WOMEN"}
        button={"SHOP WOMEN"}
        path={"/shop-women"}
      />
    </section>
  );
};

export default HomeShop;
