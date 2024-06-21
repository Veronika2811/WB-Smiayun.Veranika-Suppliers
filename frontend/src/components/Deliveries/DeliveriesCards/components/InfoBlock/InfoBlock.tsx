import { Stack, Typography } from '@mui/material';

import { infoBlockSx } from './styles';

type InfoBlockProps = {
  label: string;
  value?: string | number;
};

export const InfoBlock = ({ label, value }: InfoBlockProps) => (
  <Stack direction="column">
    <Typography sx={infoBlockSx.label}>{label}</Typography>
    <Typography sx={infoBlockSx.value}>{value}</Typography>
  </Stack>
);
