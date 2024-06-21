import { Box } from '@mui/material';

import { NavigationMenu } from 'components/Header/components/NavigationMenu/NavigationMenu';

import { navigationSx } from './styles';

export const Navigation = () => (
  <Box sx={navigationSx.container}>
    <NavigationMenu />
  </Box>
);
