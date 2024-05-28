import React, { useEffect, useState } from "react";

const useFetch = (fetchFun, arg) => {
  const [data, setData] = useState({
    loading: true,
    error: false,
    data: null,
  });
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchFun(arg);
        setData(() => {
          return {
            loading: false,
            error: null,
            data: data,
          };
        });
      } catch (error) {
        setData(() => {
          return {
            error: error.message,
            loading: false,
            data: null,
          };
        });
      }
    })();
  }, []);
  return data;
};

export default useFetch;
