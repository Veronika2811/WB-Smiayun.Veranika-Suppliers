import { Chip } from '@mui/material';
import { getChipColor } from 'ui/CustomChip/helpers/getChipColor';

import { customChipSx } from './styles';

export const CustomChip = ({ value }: { value: string }) => (
  <Chip
    label={value}
    size="small"
    sx={{ ...customChipSx.chip, ...getChipColor(value) }}
  />
);
