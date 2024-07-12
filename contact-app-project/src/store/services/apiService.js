import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_endpoints_url } from "../../lib/constant";

export const apiService = createApi({
  reducerPath: "apiService",
  baseQuery: fetchBaseQuery({
    baseUrl: base_endpoints_url,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${JSON.parse(token)}`);
      } else {
        headers.delete();
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});
