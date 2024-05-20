import axios from "axios";
import { baseApi } from "../Config/baseApi";

export const Api = axios.create({
  baseURL: baseApi,
  headers: { "content-type": "application/json" },
});
