import { baseApi } from "./baseApi";

const allApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBanner: builder.query({
      query: () => ({
        url: `/banner`,
        method: "GET",
      }),
    }),
    getAllRecentActivities: builder.query({
      query: () => ({
        url: `/activity`,
        method: "GET",
      }),
    }),

    createRegistration: builder.mutation({
      query: (payload) => ({
        url: `/registrations`,
        method: "POST",
        body: payload,
      }),
    }),


  }),
});

export const {
  useGetAllBannerQuery,
  useGetAllRecentActivitiesQuery,
  useCreateRegistrationMutation,
} = allApi;