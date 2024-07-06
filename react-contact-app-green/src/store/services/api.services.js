import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINTS } from "../../lib/constant";

export const apiBaseService = createApi({
  reducerPath: "apiBaseService",
  baseQuery: fetchBaseQuery({
    baseUrl: API_ENDPOINTS,
    prepareHeaders: (headers) => {
      if (localStorage.getItem("auth")) {
        headers.set(
          "Authorization",
          `Bearer ${JSON.parse(localStorage.getItem("auth"))}`
        );
      } else {
        headers.delete("Authorization");
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
