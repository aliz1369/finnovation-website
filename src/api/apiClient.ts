import axios from "axios";

const baseURL = "https://finwebsite.duckdns.org/api";
const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
