import { IconButton, SvgIconOwnProps } from '@mui/material';
import { SearchIcon } from 'ui/icons/SearchIcon';

import { searchIconButtonSx } from './styles';

export const SearchIconButton = ({
  handleSearch,
}: {
  handleSearch: () => void;
}) => {
  const iconSearchProps: SvgIconOwnProps = {
    viewBox: '0 0 24 24',
    sx: {
      width: 24,
      height: 24,
      fill: 'none',
      filter:
        'invert(56%) sepia(98%) saturate(0%) hue-rotate(324deg) brightness(102%) contrast(102%)',
    },
  };

  return (
    <IconButton
      onClick={handleSearch}
      sx={searchIconButtonSx.button}
      aria-label="search-delivery"
      title="Поиск"
    >
      <SearchIcon {...iconSearchProps} />
    </IconButton>
  );
};
