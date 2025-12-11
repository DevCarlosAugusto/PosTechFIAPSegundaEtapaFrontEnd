import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Cache-Control": "no-cache", // Desabilita o cache
    Pragma: "no-cache",
    Expires: "0",
  },
});

export default api;
