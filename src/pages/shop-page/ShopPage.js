import ItemsDisplay from "./components/ItemsDisplay";

const ShopPage = () => {
  return (
    <main className="shop-page">
      <section className="shop-items-section">
        <ItemsDisplay category={"Men"} />
      </section>
    </main>
  );
};

export default ShopPage;
