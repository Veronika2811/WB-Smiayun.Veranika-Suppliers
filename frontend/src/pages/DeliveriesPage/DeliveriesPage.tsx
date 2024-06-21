import { useState } from 'react';
import { Box } from '@mui/material';
import { GridRowParams } from '@mui/x-data-grid';
import { useCustomMediaQuery } from 'hooks/useCustomMediaQuery';
import { useGetListDeliveriesQuery } from 'service/api';
import {
  LOCAL_STORAGE_FILTER,
  LOCAL_STORAGE_SEARCH_VALUE,
} from 'shared/constants/constantsDeliveries';
import { Delivery } from 'types/delivery';

import { DeliveriesCards } from 'components/Deliveries/DeliveriesCards';
import { DeliveriesTable } from 'components/Deliveries/DeliveriesTable';
import { DrawerModalSwitcher } from 'components/Deliveries/DrawerModalSwitcher';
import { Toolbar } from 'components/Deliveries/Toolbar';

import { deliveriesPageSx } from './styles';

export const DeliveriesPage = () => {
  const { isTablet } = useCustomMediaQuery();
  const [open, setOpen] = useState<boolean>(false);
  const [selectedDelivery, setSelectedDelivery] = useState<
    Delivery | undefined
  >(undefined);

  const filter = localStorage.getItem(LOCAL_STORAGE_FILTER);
  const searchValue = localStorage.getItem(LOCAL_STORAGE_SEARCH_VALUE);

  useGetListDeliveriesQuery({ filter, searchValue });

  const editDelivery = (delivery: Delivery) => {
    setOpen(true);
    setSelectedDelivery(delivery);
  };

  const handleEditDeliveryFromGrid = (params: GridRowParams) =>
    editDelivery(params.row);

  const handleEditTabletDelivery = (params: Delivery) => editDelivery(params);

  const closeModal = () => setOpen(false);

  return (
    <Box sx={deliveriesPageSx.container}>
      <Toolbar />
      {isTablet ? (
        <DeliveriesTable editDelivery={handleEditDeliveryFromGrid} />
      ) : (
        <DeliveriesCards editDelivery={handleEditTabletDelivery} />
      )}
      <DrawerModalSwitcher
        open={open}
        closeModal={closeModal}
        deliveryNumber={selectedDelivery?.id}
        typeModal="editDelivery"
        selectedDelivery={selectedDelivery}
      />
    </Box>
  );
};
