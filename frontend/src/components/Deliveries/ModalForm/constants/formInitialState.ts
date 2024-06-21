import { Delivery } from 'types/delivery';

import {
  CITIES,
  DELIVERY_STATUSES,
  DELIVERY_TYPES,
  WAREHOUSES,
} from './constants';

export const INITIAL_STATE_DELIVERY_FORM: Delivery = {
  deliveryDate: '',
  city: CITIES[0],
  quantity: 0,
  deliveryType: DELIVERY_TYPES[0],
  warehouse: WAREHOUSES[0],
  status: DELIVERY_STATUSES[0],
};
