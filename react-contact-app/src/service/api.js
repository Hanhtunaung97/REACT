import axios from "axios";
import { API_ENDPOINTS } from "../lib/constant";

export const api = axios.create({
  baseURL: API_ENDPOINTS,
});
