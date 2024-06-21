import { Outlet } from 'react-router-dom';
import { Box, SvgIconOwnProps } from '@mui/material';
import { useAppSelector } from 'hooks/redux-hooks';
import { useCustomMediaQuery } from 'hooks/useCustomMediaQuery';
import { suppliesLoadingSelector } from 'store/selectors';
import { LogoIcon } from 'ui/Icons/LogoIcon';
import { LoaderOverlay } from 'ui/LoaderOverlay/LoaderOverlay';

import { Header } from 'components/Header/Header';

import { layoutSx } from './styles';

const logoIconProps: SvgIconOwnProps = {
  viewBox: '0 0 92 92',
  sx: {
    width: 92,
    height: 92,
  },
};

export const Layout = () => {
  const { isTablet } = useCustomMediaQuery();
  const isLoading = useAppSelector(suppliesLoadingSelector);

  return (
    <>
      {isTablet && <LogoIcon {...logoIconProps} />}
      {isLoading && <LoaderOverlay />}

      <Box component="main" sx={layoutSx.main}>
        <Header />
        <Outlet />
      </Box>
    </>
  );
};
