import { Box, SvgIconOwnProps, Typography } from '@mui/material';
import { NoRowsIcon } from 'ui/Icons/NoRowsIcon';

import { noDeliveriesNoticeSx } from './styles';

const iconNoRowsProps: SvgIconOwnProps = {
  viewBox: '0 0 184 152',
  sx: {
    width: 240,
    height: 200,
  },
};

export const NoDeliveriesNotice = () => (
  <Box component="div" sx={noDeliveriesNoticeSx.container}>
    <NoRowsIcon {...iconNoRowsProps} />
    <Typography variant="body1">Нет данных для отображения.</Typography>
  </Box>
);
