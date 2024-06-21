import theme from 'theme/theme';

export const actionButtonsSx = {
  container: {
    paddingTop: '24px',
    display: 'flex',
    gap: '12px',
  },
  'submit-button': {
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
};
