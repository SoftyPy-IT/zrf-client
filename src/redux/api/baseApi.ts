import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/helpers/axiosBaseQuery";
import { getPublicApiUrl } from "@/config/env";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({
    baseUrl: getPublicApiUrl(),
  }),
  endpoints: () => ({}),
});
