import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://dummyapi.io/data/v1";

const useAxios = ({ url, method, body = null }) => {
  const headers = { "app-id": "649fdbf471c86975bb6343f9" };
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    axios[method](url, headers, JSON.parse(body))
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers]);

  return { response, error, loading };
};

export default useAxios;
