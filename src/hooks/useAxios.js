import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "https://dummyapi.io/data/v1";
axios.defaults.headers = {
  "app-id": "649fdbf471c86975bb6343f9",
};

const useAxios = ({ url = "/post?limit=10", method, body = null }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    axios[method](url, JSON.parse(body))
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [method, url, body]);

  return { response, error, loading };
};

export default useAxios;
