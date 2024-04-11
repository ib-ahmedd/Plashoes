import axios from "axios";
import { useEffect, useState, useCallback } from "react";
const useFetch = (url, headers) => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setLoading] = useState(true);

  const getProducts = useCallback(async () => {
    const host = "http://localhost:5000";
    try {
      const result = await axios.get(host + url, { headers });
      const { data } = result;
      const { productsArray, count } = data;
      setProducts(productsArray);
      setCount(count);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }, [url, headers]);
  useEffect(() => {
    getProducts();
  }, [url, getProducts]);
  return { products, isLoading, count };
};

export default useFetch;
