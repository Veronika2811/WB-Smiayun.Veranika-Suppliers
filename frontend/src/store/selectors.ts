import { RootState } from './store';

export const suppliesSelector = (state: RootState) =>
  state.suppluList.deliveryList;
export const suppliesLoadingSelector = (state: RootState) =>
  state.suppluList.isLoading;
