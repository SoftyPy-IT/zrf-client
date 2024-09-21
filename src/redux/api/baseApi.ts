
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tagTypes";
import { axiosBaseQuery } from "@/helpers/axiosBaseQuery";


export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL as string,
  }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});

