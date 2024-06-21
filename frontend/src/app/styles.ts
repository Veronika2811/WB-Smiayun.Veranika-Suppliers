import theme from 'theme/theme';

export const appSx = {
  content: {
    width: 'calc(100% - 92px)',

    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
};
