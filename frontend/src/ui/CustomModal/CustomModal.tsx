import { ReactNode } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Dialog, IconButton } from '@mui/material';

import { TransitionModal } from './components/TransitionModal/TransitionModal';
import { customModalSx } from './styles';

type CustomModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

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
