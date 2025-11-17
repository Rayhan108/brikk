import { baseApi } from "../../api/baseApi";

const othersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStats: builder.query({
      query: (year) => ({
        url:"/admin/statistics",
        method: "GET",
params:{year}
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
