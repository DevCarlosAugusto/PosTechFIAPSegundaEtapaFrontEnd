import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000", // <-- aqui vai a URL do backend
});

export default api;
