import { useContext } from "react";
import { ProductPageContext } from "../ProductPage";

const LongDesc = () => {
  const { product } = useContext(ProductPageContext);
  const { description } = product;
  const descriptionArray = description ? description.split("+") : [];
  const discriptionDisplay = descriptionArray.map((item) => (
    <p key={item}>{item}</p>
  ));
  return <div className="long-desc">{discriptionDisplay}</div>;
};
export default LongDesc;
