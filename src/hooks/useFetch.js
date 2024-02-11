import { useEffect, useState, useCallback } from "react";
const useFetch = (url) => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setLoading] = useState(true);

  const getProducts = useCallback(async () => {
    const host = "http://localhost:5000";
    try {
      const result = await fetch(host + url);
      const { productsArray, count } = await result.json();
      setProducts(productsArray);
      setCount(count);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [url]);
  useEffect(() => {
    getProducts();
  }, [url, getProducts]);
  return { products, isLoading, count };
};

export default useFetch;
