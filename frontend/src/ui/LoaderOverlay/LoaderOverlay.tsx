import { Box, CircularProgress } from '@mui/material';

import { loaderOverlaySx } from './styles';

export const LoaderOverlay = () => (
  <Box sx={loaderOverlaySx.loader}>
    <CircularProgress size={100} />
  </Box>
);
