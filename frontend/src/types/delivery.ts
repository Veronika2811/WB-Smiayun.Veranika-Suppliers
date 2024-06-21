import { Dayjs } from 'dayjs';
import {
  EDIT_DELIVERY,
  NEW_DELIVERY,
} from 'shared/constants/constantsDeliveries';

export type Delivery = {
  city: string;
  quantity: number;
  deliveryDate: string | Dayjs;
  deliveryType: string;
  warehouse: string;
  status: string;
  id?: number;
  warehouseAddress?: string;
};

export type TypesModal = typeof EDIT_DELIVERY | typeof NEW_DELIVERY;
