import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const kitsuAPI = createApi({
  reducerPath: "kitsuAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://kitsu.io/api/edge/" }),

  endpoints: (builder) => ({
    fetchPopularAnimeKitsu: builder.query({
      query: (title: string) => `anime?filter[text]=${title}`,
      // query: () => "anime",
    })
  }),
});

export const { useFetchPopularAnimeKitsuQuery } = kitsuAPI;
