import { ChangeEvent, useState } from 'react';
import { Box, InputBase } from '@mui/material';
import { useLazyGetListDeliveriesQuery } from 'service/api';
import {
  LOCAL_STORAGE_FILTER,
  LOCAL_STORAGE_SEARCH_VALUE,
} from 'shared/constants/constantsDeliveries';

import { FilterSelect } from 'components/Deliveries/Toolbar/components/SearchInput/components/FilterSelect';
import { SearchIconButton } from 'components/Deliveries/Toolbar/components/SearchInput/components/SearchIconButton';

import { searchInputSx } from './styles';

export const SearchInput = () => {
  const [filter, setFilter] = useState(
    localStorage.getItem(LOCAL_STORAGE_FILTER) || 'id'
  );
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem(LOCAL_STORAGE_SEARCH_VALUE) || ''
  );

  const [changeFilters] = useLazyGetListDeliveriesQuery();

  const handleSearch = () => {
    changeFilters({ filter, searchValue });
    localStorage.setItem(LOCAL_STORAGE_FILTER, filter);
    localStorage.setItem(LOCAL_STORAGE_SEARCH_VALUE, searchValue);
  };

  const changeInputValue = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(e.target.value);

  return (
    <Box sx={searchInputSx['search-input-container']}>
      <InputBase
        sx={searchInputSx['input-base']}
        startAdornment={
          <FilterSelect
            filter={filter}
            setFilter={setFilter}
            setInputValue={setSearchValue}
          />
        }
        placeholder="Поиск…"
        value={searchValue}
        onChange={changeInputValue}
        endAdornment={<SearchIconButton handleSearch={handleSearch} />}
      />
    </Box>
  );
};
