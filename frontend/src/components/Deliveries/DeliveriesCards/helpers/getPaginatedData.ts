import { ITEMS_PER_PAGE } from 'shared/constants/constantsDeliveries';
import { Delivery } from 'types/delivery';

export const getPaginatedData = (deliveries: Delivery[] | [], page: number) => {
  const paginatedItems = deliveries.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const numberPages = Math.ceil(deliveries.length / ITEMS_PER_PAGE);

  return { paginatedItems, numberPages };
};
