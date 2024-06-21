import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link } from '@mui/material';

import { NAVIGATION_LINKS } from './constants/constants';
import { navigationMenuSx } from './styles';

interface NavigationMenuProps {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavigationMenu = ({ setOpen }: NavigationMenuProps) => {
  const location = useLocation();

  const closeDrawer = () => {
    if (setOpen) setOpen(false);
  };

  return (
    <>
      {NAVIGATION_LINKS.map((link) => {
        const isPathEqualToLinkValue = location.pathname === `/${link.value}`;

        return (
          <Link
            key={link.value}
            component={RouterLink}
            to={link.value}
            color="secondary"
            aria-label="menu-link"
            onClick={closeDrawer}
            sx={{
              ...navigationMenuSx.link,
              color: isPathEqualToLinkValue ? '#2d2c32' : '#ffffff',
              background: isPathEqualToLinkValue ? '#ffffff' : 'transparent',

              '&:hover': {
                backgroundColor: !isPathEqualToLinkValue
                  ? 'rgba(255, 255, 255, 0.08)'
                  : '#ffffff',
                color: !isPathEqualToLinkValue ? '#ffffff' : '#2d2c32',
              },
            }}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
};
