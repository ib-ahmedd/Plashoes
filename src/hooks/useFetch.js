import { useEffect, useState, useCallback } from "react";
const useFetch = (url) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const getProducts = useCallback(async () => {
    try {
      const result = await fetch(url);
      const data = await result.json();
      setProducts(data);
      setLoading(false);
      setCategories(data.map((item) => item.categories));
    } catch (err) {
      console.log(err);
    }
  }, [url]);
  useEffect(() => {
    getProducts();
    console.log("called");
  }, [url, getProducts]);
  return { products, isLoading, categories };
};

export default useFetch;
