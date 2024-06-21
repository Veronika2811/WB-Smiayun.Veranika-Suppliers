import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Delivery } from 'types/delivery';

interface DeliveryData {
  deliveryList: Delivery[] | [];
  isLoading: boolean;
}

const initialState: DeliveryData = {
  deliveryList: [],
  isLoading: false,
};

export const supplyListSlice = createSlice({
  name: 'supplyList',
  initialState,
  reducers: {
    setSupplyList(state: DeliveryData, action: PayloadAction<Delivery[] | []>) {
      state.deliveryList = action.payload;
    },
    setBootState(state: DeliveryData, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

const { actions, reducer: supplyListReducer } = supplyListSlice;

export const { setSupplyList, setBootState } = actions;

export default supplyListReducer;
