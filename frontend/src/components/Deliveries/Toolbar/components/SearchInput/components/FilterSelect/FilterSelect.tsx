import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ChevronDownIcon } from 'ui/icons';

import { FILTER_OPTIONS } from './constants/constants';
import { filterSelectSx } from './styles';

type FilterSelectProps = {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

export const FilterSelect = ({
  filter,
  setFilter,
  setInputValue,
}: FilterSelectProps) => {
  const changeFilter = (e: SelectChangeEvent) => {
    setFilter(e.target.value);
    setInputValue('');
  };

  return (
    <Select
      labelId="filter-label"
      value={filter}
      onChange={changeFilter}
      variant="standard"
      IconComponent={ChevronDownIcon}
      sx={filterSelectSx['filter-select']}
    >
      {FILTER_OPTIONS.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};
