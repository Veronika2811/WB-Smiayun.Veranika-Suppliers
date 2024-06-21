import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setBootState, setSupplyList } from 'store/slices/supplyList';
import { Delivery } from 'types/delivery';

export const deliveriesApi = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:7000' }),
  endpoints: (build) => ({
    getListDeliveries: build.query<
      Delivery[],
      { filter?: string | null; searchValue?: string | null }
    >({
      query: ({ filter, searchValue }) => {
        const queryParams: Record<string, string | undefined> = {};

        if (filter) {
          queryParams.filter = filter;
        }

        if (searchValue) {
          queryParams.searchValue = searchValue;
        }

        return {
          url: '/deliveries',
          method: 'GET',
          params: queryParams,
        };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          dispatch(setBootState(true));
          const { data } = await queryFulfilled;

          dispatch(setSupplyList(data));
          dispatch(setBootState(false));
        } catch (err) {
          dispatch(setBootState(false));
        }
      },
    }),
    deleteDelivery: build.mutation<Delivery[], string | number>({
      query: (id) => ({
        url: `/deliveries/${id}`,
        method: 'DELETE',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          dispatch(setBootState(true));
          const { data } = await queryFulfilled;

          dispatch(setSupplyList(data));
          dispatch(setBootState(false));
        } catch (err) {
          dispatch(setBootState(false));
        }
      },
    }),
    postDelivery: build.mutation<Delivery[], Delivery>({
      query: (newDelivery) => ({
        url: `/deliveries`,
        method: 'POST',
        body: newDelivery,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          dispatch(setBootState(true));
          const { data } = await queryFulfilled;

          dispatch(setSupplyList(data));
          dispatch(setBootState(false));
        } catch (err) {
          dispatch(setBootState(false));
        }
      },
    }),
    putDelivery: build.mutation<Delivery[], Delivery>({
      query: (newDelivery) => ({
        url: `/deliveries`,
        method: 'PUT',
        body: newDelivery,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          dispatch(setBootState(true));
          const { data } = await queryFulfilled;

          dispatch(setSupplyList(data));
          dispatch(setBootState(false));
        } catch (err) {
          dispatch(setBootState(false));
        }
      },
    }),
  }),
});

export const {
  useGetListDeliveriesQuery,
  useLazyGetListDeliveriesQuery,
  useDeleteDeliveryMutation,
  usePostDeliveryMutation,
  usePutDeliveryMutation,
} = deliveriesApi;
