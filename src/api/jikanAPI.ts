import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jikanApi = createApi({
  reducerPath: "jikanApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jikan.moe/v4/" }),

  endpoints: (builder) => ({
    fetchPopularAnime: builder.query({
      query: () => "seasons/now",
      // query: () => "anime",
    }),
    fetchTopAnime: builder.query({
      query: () => "top/anime",
    }),
  }),
});

export const { useFetchPopularAnimeQuery, useFetchTopAnimeQuery } = jikanApi;
