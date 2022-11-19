import { useState, useEffect } from "react";

const url = "";

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((response) => setData(response))
      .finally(setLoading(false));
  }, []);

  return { data, loading };
};

export default useFetch;
