import { Box, Typography } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';

import { warehouseAddressCellSx } from './styles';

interface WarehouseAddressCellProps {
  params: GridRenderCellParams;
}

export const WarehouseAddressCell = ({ params }: WarehouseAddressCellProps) => (
  <Box component="div" sx={warehouseAddressCellSx.container}>
    <Typography variant="body1" sx={warehouseAddressCellSx.warehouse} noWrap>
      {params.value}
    </Typography>
    <Typography
      variant="body2"
      sx={warehouseAddressCellSx['warehouse-address']}
    >
      {params.row.warehouseAddress}
    </Typography>
  </Box>
);
