import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useGet = (url, accessToken) => {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState([]);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api" + url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const { data } = response;
      setResult(data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  }, [accessToken, url]);

  useEffect(() => {
    getData();
  }, [getData, url]);
  return { loading, result };
};
export default useGet;
