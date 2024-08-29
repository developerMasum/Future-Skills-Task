import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tag-types";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://future-skills-assessment-server.vercel.app/cards",
  }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
