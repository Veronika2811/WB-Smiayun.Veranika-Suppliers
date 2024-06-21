import { ReactNode } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Drawer, IconButton } from '@mui/material';

import { customDrawerSx } from './styles';

type CustomDrawerProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  anchor?: 'left' | 'top' | 'right' | 'bottom';
};

export const CustomDrawer = ({
  open,
  setOpen,
  children,
  anchor = 'bottom',
}: CustomDrawerProps) => {
  const closeDrawer = () => setOpen(false);

  return (
    <Drawer
      anchor={anchor}
      sx={{
        ...customDrawerSx.drawer,
        '& .MuiDrawer-paper.MuiPaper-elevation': {
          borderRadius: anchor === 'left' ? '0 16px 16px 0' : '16px 16px 0 0',
        },
      }}
      open={open}
      onClose={closeDrawer}
    >
      <IconButton
        aria-label="close-drawer"
        onClick={closeDrawer}
        sx={customDrawerSx['close-icon']}
        title="Закрыть"
      >
        <CloseRoundedIcon />
      </IconButton>
      {children}
    </Drawer>
  );
};
