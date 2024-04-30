const LoadingTableRow = () => {
  return (
    <tr>
      <td className="image-width table-image">
        <div className="loading-image"></div>
      </td>
      <td className="product-width product">
        <div className="loading-text"></div>
      </td>
      <td className="price-width">
        <div className="loading-text"></div>
      </td>
      <td className="quantity-width">
        <div className="loading-text"></div>
      </td>
      <td className="subtotal-width subtotal">
        <div className="loading-text"></div>
      </td>
    </tr>
  );
};
export default LoadingTableRow;
