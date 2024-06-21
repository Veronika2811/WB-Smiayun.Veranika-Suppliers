import { Box } from '@mui/material';
import { useLazyGetListDeliveriesQuery } from 'services/api';
import { CustomIconButton } from 'ui/CustomIconButton/CustomIconButton';
import { DocIcon } from 'ui/Icons/DocIcon';
import { LogIcon } from 'ui/Icons/LogIcon';

export const ActionButtons = () => {
  const [getSupplyList] = useLazyGetListDeliveriesQuery();

  const updateSupplyList = () => getSupplyList({});

  return (
    <Box>
      <CustomIconButton
        icon={<LogIcon />}
        ariaLabel="new request for supplies"
        onClick={updateSupplyList}
        title="Обновить список поставок"
      />
      <CustomIconButton
        icon={<DocIcon />}
        ariaLabel="documentation"
        title="Документация"
      />
    </Box>
  );
};

export default ActionButtons;
