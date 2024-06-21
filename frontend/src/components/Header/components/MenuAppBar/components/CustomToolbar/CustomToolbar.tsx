import MenuIcon from '@mui/icons-material/Menu';
import { SvgIconOwnProps, Toolbar } from '@mui/material';
import { CustomIconButton } from 'ui/CustomIconButton/CustomIconButton';
import { LogoIcon } from 'ui/Icons/LogoIcon';

import ActionButtons from '../ActionButtons/ActionButtons';

import { customToolbarSx } from './styles';

const logoIconProps: SvgIconOwnProps = {
  viewBox: '0 0 92 92',
  sx: {
    width: 60,
    height: 60,
    marginLeft: '34px',
  },
};

export const CustomToolbar = ({ openDrawer }: { openDrawer: () => void }) => (
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
