export const customSelectSx = {
  select: {
    borderRadius: '10px',

    '&.Mui-focused': {
      background: 'rgba(255, 255, 255, 0.24)',
    },

    '&:hover': {
      background: 'rgba(255, 255, 255, 0.24)',
    },

    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },

    '& .MuiSelect-select': {
      background: 'rgba(255, 255, 255, 0.08)',
      color: '#ffffff',
      borderRadius: '10px',
      padding: '11px 16px',

      '&.MuiInputBase-input.MuiOutlinedInput-input:focus': {
        borderRadius: '10px',
      },
    },
    '& .MuiSvgIcon-root': {
      color: '#ffffff',
    },
  },
};
