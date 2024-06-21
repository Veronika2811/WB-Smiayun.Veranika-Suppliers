import { Button, SvgIconOwnProps } from '@mui/material';
import { useCustomMediaQuery } from 'hooks/useCustomMediaQuery';
import { CustomIconButton } from 'ui/CustomIconButton/CustomIconButton';
import { AddIcon } from 'ui/icons/AddIcon';

import { addButtonSx } from './styles';

export const AddButton = ({
  handleAddSupply,
}: {
  handleAddSupply: () => void;
}) => {
  const { isTablet } = useCustomMediaQuery();

  const iconAddButtonProps: SvgIconOwnProps = {
    viewBox: '0 0 20 20',
    sx: {
      width: 20,
      height: 20,
    },
  };

  if (isTablet) {
    return (
      <Button
        variant="text"
        startIcon={<AddIcon {...iconAddButtonProps} />}
        color="inherit"
        sx={addButtonSx.button}
        onClick={handleAddSupply}
      >
        Добавить поставку
      </Button>
    );
  }

  return (
    <CustomIconButton
      icon={<AddIcon {...iconAddButtonProps} />}
      ariaLabel="add delivery"
      onClick={handleAddSupply}
      title="add-delivery"
    />
  );
};
