import { WAREHOUSES_ADDRESS } from '../constants/constants';

export const getRandomWarehousesAddress = (warehouseAddress?: string) => {
  if (!warehouseAddress) {
    const randomWarehousesAddressIndex = Math.floor(
      Math.random() * WAREHOUSES_ADDRESS.length
    );

    return WAREHOUSES_ADDRESS[randomWarehousesAddressIndex];
  }

  return warehouseAddress;
};
