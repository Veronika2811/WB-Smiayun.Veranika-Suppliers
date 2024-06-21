import { RootState } from './store';

export const suppliesSelector = (state: RootState) =>
  state.supplyList.deliveryList;
export const suppliesLoadingSelector = (state: RootState) =>
  state.supplyList.isLoading;
