import theme from 'theme/theme';

export const customChipSx = {
  chip: {
    fontFamily: 'ALSHauss, Arial, sans-serif',
    fontWeight: '900',
    fontSize: '11px',
    lineHeight: '127%',
    letterSpacing: '0.02em',
    borderRadius: '6px',
    padding: '2px 4px',
    height: '18px',

    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
      height: '24px',
    },

    '& .MuiChip-label': {
      padding: 0,
      paddingTop: '3px',
    },
  },
};
