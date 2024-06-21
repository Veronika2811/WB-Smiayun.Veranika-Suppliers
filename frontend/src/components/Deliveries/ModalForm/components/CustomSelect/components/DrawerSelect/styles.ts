export const mobileSelectSx = {
  input: {
    background: 'rgba(255, 255, 255, 0.08)',
    color: '#ffffff',
    borderRadius: '10px',
    padding: '11px 16px',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.24)',
    },

    '& .MuiInputBase-root': {
      color: '#ffffff',
      padding: 0,

      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    },
    '& .MuiInputBase-root .MuiOutlinedInput-input': {
      padding: 0,
    },
    '& .MuiTypography-root': {
      color: 'rgba(255, 255, 255, 0.24)',
    },
  },
  title: {
    fontWeight: 560,
    fontSize: '22px',
    lineHeight: '127%',
    color: '#ffffff',
    fontFamily: 'ALSHauss, Arial, sans-serif',
    paddingBottom: '16px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.24)',
  },
};
