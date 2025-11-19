import { baseApi } from "../../api/baseApi";

const othersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStats: builder.query({
      query: (year) => ({
        url: "/admin/statistics",
        method: "GET",
        params: { year },
      }),
    }),
    recentJoinUsers: builder.query({
      query: () => ({
        url: "/admin/recent-users",
        method: "GET",
      }),
    }),
    allCategory: builder.query({
      query: ({ limit, page }) => ({
        url: "/admin/categories",
        method: "GET",
        params: { page, limit },
      }),
    }),
    paymentTracking: builder.query({
      query: ({ limit, page }) => ({
        url: "/transactions/payment-tracking",
        method: "GET",
        params: { page, limit },
      }),
    }),
    getSuspentions: builder.query({
      query: ({ limit, page }) => ({
        url: "/admin/account-suspension",
        method: "GET",
        params: { page, limit },
      }),
    }),
    createCategory: builder.mutation({
      query: (formData) => ({
        url: "/admin/categories",
        method: "POST",
        body: formData,
      }),
    }),
    suspenseStatusChange: builder.mutation({
      query: ({data,id}) => ({
        url:`/admin/users/status/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetStatsQuery,
  useRecentJoinUsersQuery,
  useAllCategoryQuery,
  useCreateCategoryMutation,
  usePaymentTrackingQuery,
  useGetSuspentionsQuery,
  useSuspenseStatusChangeMutation
} = othersApi;
