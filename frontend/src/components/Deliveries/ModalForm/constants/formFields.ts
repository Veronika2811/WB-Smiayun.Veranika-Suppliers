import {
  CITIES,
  DELIVERY_STATUSES,
  DELIVERY_TYPES,
  WAREHOUSES,
} from './constants';

export const FORM_FIELDS = [
  { label: 'Город', fieldName: 'city', fieldsList: CITIES },
  { label: 'Количество', fieldName: 'quantity' },
  {
    label: 'Тип поставки',
    fieldName: 'deliveryType',
    fieldsList: DELIVERY_TYPES,
  },
  { label: 'Склад', fieldName: 'warehouse', fieldsList: WAREHOUSES },
  { label: 'Статус', fieldName: 'status', fieldsList: DELIVERY_STATUSES },
];
