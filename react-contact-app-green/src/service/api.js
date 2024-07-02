import axios from "axios";
import { API_ENDPOINTS } from "../lib/constant";

export const api = axios.create({
  baseURL:API_ENDPOINTS,
  headers: {
    Authorization:
      localStorage.getItem("auth") &&
      `Bearer ${JSON.parse(localStorage.getItem("auth"))}`,
  },
});
