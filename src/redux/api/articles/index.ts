import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    articles: build.query<ARTICLES.articlesResponse, ARTICLES.articlesRequest>({
      query: () => ({
        url: "/articles/",
        method: "GET",
      }),
      providesTags: ["articles"],
    }),
  }),
});

export const { useArticlesQuery } = api;
