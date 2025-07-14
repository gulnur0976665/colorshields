import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    portfolio: build.query<
      PORTFOLIO.portfolioResponse,
      PORTFOLIO.portfolioRequest
    >({
      query: () => ({
        url: "/portfolio",
        method: "GET",
      }),
      providesTags: ["portfolio"],
    }),
  }),
});
export const { usePortfolioQuery } = api;
