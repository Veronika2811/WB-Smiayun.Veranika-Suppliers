export const filterSelectSx = {
  'filter-select': {
    '&.MuiInputBase-root': {
      margin: '4px',
      fontFamily: 'ALSHauss, Helvetica, Arial, sans-serif',
      background: '#2d2c32',
      borderRadius: '10px',

      '&:hover': {
        background: 'rgba(255, 255, 255, 0.24)',
        transition: 'background 0.3s',
      },

      '&.Mui-focused': {
        background: 'rgba(255, 255, 255, 0.24)',
        transition: 'background 0.3s',
      },
    },
    '&.MuiInputBase-root .MuiSelect-select.MuiSelect-select': {
      paddingRight: '42px',
      paddingLeft: '8px',
      paddingTop: '9px',
      color: '#ffffff',
      fontSize: '16px',
    },
    '&::before, &:hover:not(.Mui-disabled, .Mui-error):before, &::after': {
      border: 'none',
    },
    '& .MuiSvgIcon-root': {
      fontSize: '24px',
      color: '#ffffff',
      marginRight: '7px',
    },
  },
};
