import "../../assets/styles/product-page/product-style.css";
import "../../assets/styles/product-page/product-laptop-style.css";
import "../../assets/styles/product-page/product-tab-style.css";
import "../../assets/styles/product-page/product-mobile-style.css";

import { useLocation, useParams } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import DescReview from "./components/DescReview";
import RelatedProducts from "./components/RelatedProducts";
import useFetch from "../../hooks/useFetch";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import LoadingProductSection from "./components/LoadingProductSection";
import axios from "axios";
import { AppContext } from "../../App";
import AddedToCart from "./components/AddedToCart";

export const ProductPageContext = createContext("");

const ProductPage = () => {
  const {
    user,
    setCartRefresh,
    cartProducts,
    isLoggedIn,
    setCookie,
    setProducts,
    accessToken,
    setRecentProducts,
  } = useContext(AppContext);
  const { id } = useParams();
  const { products, isLoading } = useFetch(`/product/${id}`);
  const [displayedProduct, relatedProducts, comments] = products;
  const [addedOpen, setAddedOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const addedQuantity = useRef(0);
  const [disabledBtn, setDisabledBtn] = useState(false);

  const { pathname } = useLocation();

  function handleNoLogCart() {
    const { image, shoename, price, id } = displayedProduct;
    const cartItem = {
      image,
      shoe_name: shoename,
      quantity,
      price,
      productId: id,
      id: id,
    };

    const foundProduct = cartProducts.find((item) => item.id === cartItem.id);
    if (foundProduct) {
      setProducts((prevState) => {
        const updatedItems = prevState.map((item) => {
          if (item.id === cartItem.id) {
            item.quantity = item.quantity + cartItem.quantity;
          }
          return item;
        });
        setCookie("noLogCart", JSON.stringify(updatedItems), 7);
        return updatedItems;
      });
    } else {
      setCookie("noLogCart", JSON.stringify([...cartProducts, cartItem], 7));
      setCartRefresh(true);
    }
    addedQuantity.current = quantity;
    setAddedOpen(true);
  }
  async function handleAddCart() {
    setDisabledBtn(true);
    if (isLoggedIn) {
      const foundProduct = cartProducts.find(
        (item) => item.product_id === parseInt(id)
      );
      if (foundProduct) {
        await axios.patch(
          `http://localhost:5000/api/cart-update/${foundProduct.id}`,
          {
            quantity: foundProduct.quantity + quantity,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        addedQuantity.current = quantity;
        setAddedOpen(true);
        setCartRefresh(true);
      } else {
        await axios.post(
          "http://localhost:5000/api/add-cart",
          {
            productId: id,
            userId: user ? user.id : 1,
            quantity: quantity,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        addedQuantity.current = quantity;
        setAddedOpen(true);
        setCartRefresh(true);
      }
    } else {
    }

    setDisabledBtn(false);
  }

  function handleQuantity(func) {
    if (func === "add") {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity((prevQuantity) => prevQuantity - 1);
      }
    }
  }

  const ProductPageContextValues = {
    product: displayedProduct ? displayedProduct : {},
    relatedProducts,
    quantity,
    setQuantity,
    handleAddCart,
    handleQuantity,
    handleNoLogCart,
    disabledBtn,
    comments: comments ? comments : [],
  };

  useEffect(() => {
    if (!isLoading) {
      setRecentProducts(displayedProduct);
    }
  }, [setRecentProducts, isLoading, displayedProduct]);

  useEffect(() => {
    setAddedOpen(false);
  }, [pathname]);

  return (
    <main className="product-page">
      <ProductPageContext.Provider value={ProductPageContextValues}>
        {isLoading ? (
          <LoadingProductSection />
        ) : (
          <>
            {addedOpen && (
              <AddedToCart
                quantity={addedQuantity.current}
                productName={displayedProduct.shoename}
              />
            )}
            <ProductDetails />
            <DescReview />
            <RelatedProducts />
          </>
        )}
      </ProductPageContext.Provider>
    </main>
  );
};
export default ProductPage;
