import theme from 'theme/theme';

export const layoutSx = {
  main: {
    width: 'calc(100% - 92px)',

    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
};
