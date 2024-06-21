export const numberInputFieldSx = {
  input: {
    background: 'rgba(255, 255, 255, 0.08)',
    color: '#ffffff',
    borderRadius: '10px',
    padding: '11px 16px',

    '&:hover': {
      background: 'rgba(255, 255, 255, 0.24)',

      '& .MuiTypography-root': {
        color: '#ffffff',
      },
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
      paddingLeft: '5px',
    },
  },
};
