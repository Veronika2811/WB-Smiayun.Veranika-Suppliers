import useMediaQuery from '@mui/material/useMediaQuery';
import theme from 'theme/theme';

export const useCustomMediaQuery = () => {
  const isTablet = useMediaQuery(theme.breakpoints.up('md'));

  return { isTablet };
};
