import { ChangeEvent, useState } from 'react';
import { TextField, Typography } from '@mui/material';
import { Dayjs } from 'dayjs';
import { CustomDrawer } from 'ui/CustomDrawer/CustomDrawer';
import { ChevronDownIcon } from 'ui/Icons/ChevronDownIcon';
import { ChevronUpIcon } from 'ui/Icons/ChevronUpIcon';

import { DrawerSelectList } from '../DrawerSelectList/DrawerSelectList';

import { mobileSelectSx } from './styles';

interface DrawerSelectProps {
  label: string;
  fieldName: string;
  fieldsList: string[];
  onChangeTextField: (event: ChangeEvent<HTMLInputElement>) => void;
  handleListChange: (name: string, value: string) => void;
  value?: string | number | Dayjs;
}

export const DrawerSelect = ({
  value,
  onChangeTextField,
  fieldName,
  label,
  fieldsList,
  handleListChange,
}: DrawerSelectProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState(value);

  const onClick = () => setOpen(!open);

  const handleListItemClick = (item: string) => {
    setSelectedItem(item);
    handleListChange(fieldName, item);
    onClick();
  };

  return (
    <>
      <TextField
        fullWidth
        value={value}
        onChange={onChangeTextField}
        name={fieldName}
        onClick={onClick}
        InputProps={{
          endAdornment: open ? <ChevronUpIcon /> : <ChevronDownIcon />,
        }}
        size="small"
        sx={mobileSelectSx.input}
      />
      <CustomDrawer open={open} setOpen={setOpen}>
        <Typography sx={mobileSelectSx.title}>{label}</Typography>
        <DrawerSelectList
          fieldsList={fieldsList}
          handleListItemClick={handleListItemClick}
          selectedItem={selectedItem}
        />
      </CustomDrawer>
    </>
  );
};
