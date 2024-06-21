import { ChangeEvent } from 'react';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Dayjs } from 'dayjs';
import { useCustomMediaQuery } from 'hooks/useCustomMediaQuery';

import { DrawerSelect } from './components/DrawerSelect/DrawerSelect';
import { customSelectSx } from './styles';

interface CustomSelectProps {
  label: string;
  fieldName: string;
  fieldsList: string[];
  onChange: (event: SelectChangeEvent<string>) => void;
  handleListChange: (name: string, value: string) => void;
  onChangeTextField: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | Dayjs;
}

export const CustomSelect = ({
  label,
  value,
  onChange,
  fieldName,
  fieldsList,
  handleListChange,
  onChangeTextField,
}: CustomSelectProps) => {
  const { isTablet } = useCustomMediaQuery();

  const selectValue = typeof value === 'string' ? value : '';

  if (!isTablet) {
    return (
      <DrawerSelect
        value={value}
        onChangeTextField={onChangeTextField}
        handleListChange={handleListChange}
        fieldName={fieldName}
        label={label}
        fieldsList={fieldsList}
      />
    );
  }

  return (
    <Select
      fullWidth
      value={selectValue}
      onChange={onChange}
      name={fieldName}
      IconComponent={ExpandMoreRoundedIcon}
      sx={customSelectSx.select}
      size="small"
    >
      {fieldsList.map((item) => (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  );
};
