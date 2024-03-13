import { useContext, useState } from "react";
import CartItem from "./CartItem";
import axios from "axios";
import { AppContext } from "../../../App";

const CartContent = ({ products, isLoading }) => {
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const { setCartRefresh } = useContext(AppContext);
  const handleDelete = async (id) => {
    const response = await axios.delete(
      `http://localhost:5000/cart-delete/${id}`
    );
    console.log(response);
    setDisplayedProducts((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
    setCartRefresh(true);
  };
  const cartContent =
    !isLoading &&
    displayedProducts.map((item) => (
      <CartItem key={item.id} {...item} handleDelete={handleDelete} />
    ));
  return <div className="cart-content">{cartContent}</div>;
};
export default CartContent;
