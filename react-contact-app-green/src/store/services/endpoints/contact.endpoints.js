import { apiBaseService } from "../api.services";

const contactEndpoints = apiBaseService.injectEndpoints({
  endpoints: (builder) => ({
    getContact: builder.query({
      query: () => ({
        url: `/contact`,
        method: "GET",
      }),
    }),
    getSingleContact: builder.query({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "GET",
      }),
    }),
    addContact: builder.mutation({
      query: (formData) => ({
        url: "/contact",
        method: "POST",
        body: formData,
      }),
    }),
    editContact: builder.mutation({
      query: (id, formData) => ({
        url: `/contact/${id}`,
        method: "PUT",
        body: formData,
      }),
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contact/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useGetContactQuery,
  useAddContactMutation,
  useEditContactMutation,
  useDeleteContactMutation,
  useGetSingleContactQuery
} = contactEndpoints;
