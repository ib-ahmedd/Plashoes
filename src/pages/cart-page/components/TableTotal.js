import { useContext } from "react";
import CartContentMobile from "./CartContentMobile";
import CartTotals from "./CartTotals";
import LoadingTable from "./LoadingTable";
import { AppContext } from "../../../App";
import CartContentDesktop from "./CartContentDesktop";

const TableTotal = () => {
  const { cartProducts, isLoading } = useContext(AppContext);

  return (
    <div
      className="table-total"
      style={cartProducts && cartProducts.length < 1 ? { display: "none" } : {}}
    >
      {isLoading ? (
        <LoadingTable />
      ) : (
        <>
          <CartContentDesktop />
          <CartContentMobile />
        </>
      )}
      <CartTotals />
    </div>
  );
};
export default TableTotal;
