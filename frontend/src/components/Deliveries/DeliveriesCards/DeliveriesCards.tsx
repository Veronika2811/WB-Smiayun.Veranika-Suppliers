import { ChangeEvent, useState } from 'react';
import { Stack } from '@mui/material';
import { useAppSelector } from 'hooks/redux-hooks';
import { suppliesSelector } from 'store/selectors';
import { Delivery } from 'types/delivery';

import { CardList } from './components/CardList';
import { CardsPagination } from './components/CardsPagination/CardsPagination';
import { FIRST_PAGE } from './constants/constants';
import { getPaginatedData } from './utils/getPaginatedData';

export const DeliveriesCards = ({
  editDelivery,
}: {
  editDelivery: (params: Delivery) => void;
}) => {
  const [page, setPage] = useState(FIRST_PAGE);

  const deliveries = useAppSelector(suppliesSelector);

  const { paginatedItems, numberPages } = getPaginatedData(deliveries, page);

  const handleChange = (_: ChangeEvent<unknown>, value: number) =>
    setPage(value);

  return (
    <Stack gap="4px">
      <CardList paginatedItems={paginatedItems} editDelivery={editDelivery} />
      <CardsPagination
        count={numberPages}
        page={page}
        handleChange={handleChange}
      />
    </Stack>
  );
};
