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
  }),
});

export const { useGetAllBannerQuery, useGetAllRecentActivitiesQuery } = allApi;
