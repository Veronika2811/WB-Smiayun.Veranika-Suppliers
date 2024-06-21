import { Box, SvgIconOwnProps, Typography } from '@mui/material';
import { NoRowsIcon } from 'ui/icons/NoRowsIcon';

import { noDeliveriesNoticeSx } from './styles';

export const NoDeliveriesNotice = () => {
  const iconNoRowsProps: SvgIconOwnProps = {
    viewBox: '0 0 184 152',
    sx: {
      width: 240,
      height: 200,
    },
  };

  return (
    <Box component="div" sx={noDeliveriesNoticeSx.container}>
      <NoRowsIcon {...iconNoRowsProps} />
      <Typography variant="body1">Нет данных для отображения.</Typography>
    </Box>
  );
};
