import { Box, Button } from '@mui/material';
import { useCustomMediaQuery } from 'hooks/useCustomMediaQuery';
import { NEW_DELIVERY } from 'shared/constants/constantsDeliveries';
import { TypesModal } from 'types/delivery';

import { actionButtonsSx } from './styles';

type ActionButtonsProps = {
  type: TypesModal;
  onClose: () => void;
};

export const ActionButtons = ({ type, onClose }: ActionButtonsProps) => {
  const { isTablet } = useCustomMediaQuery();

  const buttonText = type === NEW_DELIVERY ? 'Создать' : 'Сохранить';

  return (
    <Box sx={actionButtonsSx.container}>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={actionButtonsSx['submit-button']}
      >
        {buttonText}
      </Button>
      {isTablet && (
        <Button variant="text" onClick={onClose}>
          Отменить
        </Button>
      )}
    </Box>
  );
};
