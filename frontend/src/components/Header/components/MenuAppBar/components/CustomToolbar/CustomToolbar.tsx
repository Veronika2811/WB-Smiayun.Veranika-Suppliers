import MenuIcon from '@mui/icons-material/Menu';
import { SvgIconOwnProps, Toolbar } from '@mui/material';
import { CustomIconButton } from 'ui/CustomIconButton/CustomIconButton';
import { LogoIcon } from 'ui/icons/LogoIcon';

import ActionButtons from '../ActionButtons/ActionButtons';

import { customToolbarSx } from './styles';

export const CustomToolbar = ({ openDrawer }: { openDrawer: () => void }) => {
  const logoIconProps: SvgIconOwnProps = {
    viewBox: '0 0 92 92',
    sx: {
      width: 60,
      height: 60,
      marginLeft: '34px',
    },
  };

  return (
    <Toolbar sx={customToolbarSx.toolbar}>
      <CustomIconButton
        icon={<MenuIcon />}
        ariaLabel="open menu"
        onClick={openDrawer}
        title="Открыть меню"
      />
      <LogoIcon {...logoIconProps} />
      <ActionButtons />
    </Toolbar>
  );
};
