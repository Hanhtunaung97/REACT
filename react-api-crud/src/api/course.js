import axios from "axios";
import { baseUrl } from "../config/config";

export const courseApi = axios.create({
  baseURL: baseUrl,
  headers: {
    "content-type": "application/json",
  },
});
