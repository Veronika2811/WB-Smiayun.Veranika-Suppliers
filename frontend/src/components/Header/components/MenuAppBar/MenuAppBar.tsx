import { useState } from 'react';
import { Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { CustomDrawer } from 'ui/CustomDrawer/CustomDrawer';

import { NavigationMenu } from 'components/Header/components/NavigationMenu/NavigationMenu';

import { CustomToolbar } from './components/CustomToolbar/CustomToolbar';
import { menuAppBarSx } from './styles';

export const MenuAppBar = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);

  return (
    <Box sx={menuAppBarSx.container}>
      <AppBar position="static" sx={menuAppBarSx['app-bar']}>
        <CustomToolbar openDrawer={openDrawer} />
      </AppBar>

      <CustomDrawer anchor="left" open={open} setOpen={setOpen}>
        <Stack flexDirection="column" alignItems="center">
          <NavigationMenu setOpen={setOpen} />
        </Stack>
      </CustomDrawer>
    </Box>
  );
};
