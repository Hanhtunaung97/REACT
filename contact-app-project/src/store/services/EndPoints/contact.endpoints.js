import { apiService } from "../apiService";

const contactEndpoints = apiService.injectEndpoints({
  endpoints: (builder) => ({
    createContact: builder.mutation({
      query: (formData) => ({
        url: `/contact`,
        method: "POST",
        body: formData,
      }),
    }),
    getAllContacts: builder.query({
      query: () => ({
        url: `/contact`,
        method: "GET",
      }),
    }),
  }),
});
export const { useCreateContactMutation, useGetAllContactsQuery } =
  contactEndpoints;
