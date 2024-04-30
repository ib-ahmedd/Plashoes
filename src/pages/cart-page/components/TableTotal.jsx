import { useContext } from "react";
import CartContentMobile from "./CartContentMobile";
import CartTotals from "./CartTotals";
import LoadingTable from "./LoadingTable";
import { AppContext } from "../../../App";
import CartContentDesktop from "./CartContentDesktop";

const TableTotal = () => {
  const { isLoading } = useContext(AppContext);

  return (
    <div className="table-total">
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
