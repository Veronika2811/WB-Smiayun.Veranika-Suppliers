import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { deliveriesApi } from 'services/api';

import supplyListReducer from './slices/supplyList';

export const store = configureStore({
  reducer: combineReducers({
    supplyList: supplyListReducer,
    [deliveriesApi.reducerPath]: deliveriesApi.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(deliveriesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
