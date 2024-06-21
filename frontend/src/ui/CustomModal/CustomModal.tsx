import { ReactNode } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Dialog, IconButton } from '@mui/material';

import { customModalSx } from './styles';
import { TransitionModal } from './TransitionModal';

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const CustomModal = ({ open, onClose, children }: CustomModalProps) => (
  <Dialog
    open={open}
    TransitionComponent={TransitionModal}
    keepMounted
    onClose={onClose}
    sx={customModalSx.modal}
  >
    <IconButton
      aria-label="close-modal"
      onClick={onClose}
      sx={customModalSx['button-close']}
      title="Закрыть"
    >
      <CloseRoundedIcon />
    </IconButton>
    {children}
  </Dialog>
);
