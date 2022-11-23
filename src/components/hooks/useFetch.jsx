import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => setData(response))
      .finally(setLoading(false));
  }, [url]);

  return { data, loading };
};

export default useFetch;
