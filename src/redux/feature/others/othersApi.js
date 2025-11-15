import { baseApi } from "../../api/baseApi";

const othersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStats: builder.query({
      query: () => ({
        url:"/admin/statistics",
        method: "GET",

      }),
    }),
    recentJoinUsers: builder.query({
      query: () => ({
        url:"/admin/recent-users",
        method: "GET",

      }),
    }),

  

  }),
});

export const { useGetStatsQuery,useRecentJoinUsersQuery} = othersApi;
