import { useState } from 'react';
import { Box } from '@mui/material';
import { useAppSelector } from 'hooks/redux-hooks';
import { useCustomMediaQuery } from 'hooks/useCustomMediaQuery';
import { suppliesSelector } from 'store/selectors';

import { DrawerModalSwitcher } from 'components/Deliveries/DrawerModalSwitcher/DrawerModalSwitcher';
import { SearchInput } from 'components/Deliveries/Toolbar/components/SearchInput';

import { AddButton } from './components/AddButton';
import { Title } from './components/Title';
import { getGenerateSixDigitNumber } from './helpers/getGenerateSixDigitNumber';
import { toolbarSx } from './styles';

export const Toolbar = () => {
  const [open, setOpen] = useState(false);
  const [deliveryNumber, setDeliveryNumber] = useState<number>(0);

  const deliveries = useAppSelector(suppliesSelector);

  const { isTablet } = useCustomMediaQuery();

  const generateDeliveryNumber = () => {
    let newNumber = getGenerateSixDigitNumber();

    while (deliveries.some((item) => item.id === newNumber)) {
      newNumber = getGenerateSixDigitNumber();
    }

    setDeliveryNumber(newNumber);
  };

  const handleAddSupply = () => {
    generateDeliveryNumber();
    setOpen(true);
  };

  const closeModal = () => setOpen(false);

  return (
    <Box sx={toolbarSx.container}>
      <Title />
      <Box sx={toolbarSx.buttonContainer}>
        <AddButton handleAddSupply={handleAddSupply} />
        {isTablet && <SearchInput />}
      </Box>
      <DrawerModalSwitcher
        open={open}
        closeModal={closeModal}
        deliveryNumber={deliveryNumber}
        typeModal="newDelivery"
      />
    </Box>
  );
};
