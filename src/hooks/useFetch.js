import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const result = await fetch(url);
      const data = await result.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProducts();
  }, [url]);
  return { products, isLoading };
};

export default useFetch;
