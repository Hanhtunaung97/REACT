import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINT } from "../../lib/constant";

export const apiService = createApi({
  reducerPath: "apiService",
  baseQuery: fetchBaseQuery({
    baseUrl: API_ENDPOINT,
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
