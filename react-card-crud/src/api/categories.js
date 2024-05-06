import axios from "axios";

export const categoriesApi = axios.create({
  baseURL: `${location.origin}/api/categories`,
  headers: {
    "content-type": "application/json",
  },
});
