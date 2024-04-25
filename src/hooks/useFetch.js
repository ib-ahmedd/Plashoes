import axios from "axios";
import { useEffect, useState, useCallback } from "react";
const useFetch = (url, headers) => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setLoading] = useState(true);

  const getProducts = useCallback(async () => {
    try {
      const result = await axios.get("http://localhost:5000/api" + url, {
        headers,
      });
      const { data } = result;
      const { data: productsArray, count } = data;
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
