export const searchInputSx = {
  'search-input-container': {
    display: 'flex',
    alignItems: 'center',
  },
  'input-base': {
    gap: '13px',
    height: '44px',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: '14px',

    '&:hover, &.Mui-focused': {
      backgroundColor: 'rgba(255, 255, 255, 0.24)',
    },

    '&.Mui-focused .MuiIconButton-root .MuiSvgIcon-root': {
      filter:
        'invert(15%) sepia(98%) saturate(20%) hue-rotate(324deg) brightness(100%) contrast(102%)',
    },

    '& .MuiInputBase-input.MuiInputBase-inputAdornedStart': {
      fontSize: '16px',
      fontFamily: 'ALSHauss, Helvetica, Arial, sans-serif',
      width: '146px',
      paddingTop: '11px',
      color: '#ffffffa6',
    },
  },
};
