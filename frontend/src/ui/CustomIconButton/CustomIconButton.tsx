import { ReactNode } from 'react';
import { IconButton } from '@mui/material';

type CustomIconButton = {
  icon: ReactNode;
  ariaLabel: string;
  title: string;
  onClick?: () => void;
};

export const CustomIconButton = ({
  icon,
  ariaLabel,
  onClick,
  title,
}: CustomIconButton) => (
  <IconButton
    aria-label={ariaLabel}
    onClick={onClick}
    color="inherit"
    title={title}
  >
    {icon}
  </IconButton>
);
