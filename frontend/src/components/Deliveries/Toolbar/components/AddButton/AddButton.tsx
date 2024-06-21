import { Button, SvgIconOwnProps } from '@mui/material';
import { useCustomMediaQuery } from 'hooks/useCustomMediaQuery';
import { CustomIconButton } from 'ui/CustomIconButton/CustomIconButton';
import { AddIcon } from 'ui/Icons/AddIcon';

import { addButtonSx } from './styles';

interface AddButtonProps {
  handleAddSupply: () => void;
}

const iconAddButtonProps: SvgIconOwnProps = {
  viewBox: '0 0 20 20',
  sx: {
    width: 20,
    height: 20,
  },
};

export const AddButton = ({ handleAddSupply }: AddButtonProps) => {
  const { isTablet } = useCustomMediaQuery();

  if (!isTablet) {
    <CustomIconButton
      icon={<AddIcon {...iconAddButtonProps} />}
      ariaLabel="add delivery"
      onClick={handleAddSupply}
      title="add-delivery"
    />;
  }

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
};
