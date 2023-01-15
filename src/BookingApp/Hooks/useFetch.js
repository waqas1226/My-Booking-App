import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let res = await fetch(url);
        res = await res.json();
        setData(res);
      } catch (err) {
        setErr(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const refetch = async () => {
    setLoading(true);
    try {
      let res = await fetch(url);
      res = await res.json();
      setData(res);
    } catch (err) {
      setErr(err);
    }
    setLoading(false);
  };

  return { data, loading, err, refetch };
}

export default useFetch;
