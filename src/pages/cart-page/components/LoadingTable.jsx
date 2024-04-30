import LoadingTableRow from "./LoadingTableRow";

const LoadingTable = () => {
  return (
    <table className="loading-table">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <LoadingTableRow />
        <LoadingTableRow />
        <LoadingTableRow />
      </tbody>
    </table>
  );
};
export default LoadingTable;
