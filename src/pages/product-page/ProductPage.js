import "../../assets/styles/product-page/product-style.css";
import "../../assets/styles/product-page/product-tab-style.css";
import "../../assets/styles/product-page/product-mobile-style.css";

import { useLocation, useParams } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import DescReview from "./components/DescReview";
import RelatedProducts from "./components/RelatedProducts";
import useFetch from "../../hooks/useFetch";
import { createContext, useContext, useEffect, useState } from "react";
import LoadingProductSection from "./components/LoadingProductSection";
import axios from "axios";
import { AppContext } from "../../App";
import AddedToCart from "./components/AddedToCart";

export const ProductPageContext = createContext("");

const ProductPage = () => {
  const { user, setCartRefresh, cartProducts } = useContext(AppContext);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
  const { id } = useParams();
  const { products, isLoading } = useFetch(`/product/${id}`);
  const [displayedProduct, relatedProducts] = products;
  const [addedOpen, setAddedOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddCart = async () => {
    const foundProduct = cartProducts.find(
      (item) => item.product_id === parseInt(id)
    );
    console.log(foundProduct);
    if (foundProduct) {
      await axios.patch(
        `http://localhost:5000/cart-update/${foundProduct.id}`,
        {
          quantity: foundProduct.quantity + quantity,
        }
      );
    } else {
      axios.post("http://localhost:5000/add-cart", {
        productId: id,
        userId: user ? user.id : 1,
        quantity: quantity,
      });
    }
    setAddedOpen(true);
    setCartRefresh(true);
  };

  const handleQuantity = (func) => {
    if (func === "add") {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity((prevQuantity) => prevQuantity - 1);
      }
    }
  };

  const ProductPageContextValues = {
    product: displayedProduct ? displayedProduct : {},
    relatedProducts,
    quantity,
    setQuantity,
    handleAddCart,
    handleQuantity,
  };

  return (
    <main className="product-page">
      <ProductPageContext.Provider value={ProductPageContextValues}>
        {isLoading ? (
          <LoadingProductSection />
        ) : (
          <section className="product-section">
            {addedOpen && (
              <span className="added-to-cart-cont">
                <AddedToCart
                  quantity={quantity}
                  productName={displayedProduct.shoename}
                />
              </span>
            )}
            <ProductDetails />
            <DescReview />
            <RelatedProducts />
          </section>
        )}
      </ProductPageContext.Provider>
    </main>
  );
};
export default ProductPage;
