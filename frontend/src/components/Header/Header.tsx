import { useCustomMediaQuery } from 'hooks/useCustomMediaQuery';

import { MenuAppBar } from 'components/Header/components/MenuAppBar/MenuAppBar';
import { Navigation } from 'components/Header/components/Navigation/Navigation';

export const Header = () => {
  const { isTablet } = useCustomMediaQuery();

  if (!isTablet) {
    return <MenuAppBar />;
  }

  return <Navigation />;
};
