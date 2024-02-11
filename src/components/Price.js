const Price = ({ price, sale }) => {
  const numPrice = parseInt(price);
  const amount = numPrice.toFixed(2);
  const value = (20 / 100) * amount;
  const salePrice = (amount - value).toFixed(2);
  const currency = "$";
  return (
    <div className="price">
      {sale ? (
        <span className="sale-disp">
          <p>{currency + amount}</p>
          <p>{currency + salePrice}</p>
        </span>
      ) : (
        <p>{currency + amount}</p>
      )}
    </div>
  );
};
export default Price;
