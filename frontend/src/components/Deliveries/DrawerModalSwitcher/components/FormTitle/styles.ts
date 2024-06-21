import theme from 'theme/theme';

export const formTitleSx = {
  title: {
    fontWeight: 900,
    fontSize: '24px',
    lineHeight: '127%',
    color: '#ffffff',
    fontFamily: 'ALSHauss, Arial, sans-serif',
    paddingBottom: '10px',

    [theme.breakpoints.down('md')]: {
      fontSize: '22px',
    },
  },
  subtitle: {
    fontWeight: 440,
    fontSize: '16px',
    lineHeight: '143%',
    color: '#767386',
    paddingBottom: '27px',
    fontFamily: 'ALSHauss, Arial, sans-serif',

    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    },
  },
};
