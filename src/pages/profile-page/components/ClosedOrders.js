import OrderInfo from "./OrderInfo";

const ClosedOrders = () => {
  return (
    <div className="closed-orders">
      <OrderInfo
        source={"/images/demo-shoes-images/men/men green running.jpg"}
        alter={"shoe image"}
        productName={"Men Black Running"}
        price={"$89.90"}
        quantity={2}
        dayOrdered={"10-02-2024"}
        link={"/"}
      />
      <OrderInfo
        source={"/images/demo-shoes-images/men/men red running.jpg"}
        alter={"shoe image"}
        productName={"Men Black Running"}
        price={"$89.90"}
        quantity={2}
        dayOrdered={"10-02-2024"}
        link={"/"}
      />
    </div>
  );
};
export default ClosedOrders;
