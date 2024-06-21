export const customModalSx = {
  modal: {
    '& .MuiPaper-root': {
      width: '496px',
      boxShadow: '0 0 26px 0 rgba(0, 0, 0, 0.19)',
      background: '#2d2c32',
      padding: '48px',
      borderRadius: '16px',
    },
    '& .MuiDialogTitle-root': {
      color: '#ffffff',
      padding: 0,
      fontFamily: 'ALSHauss, Arial, sans-serif',
      fontWeight: 680,
      fontSize: '24px',
      lineHeight: '133%',
      paddingBottom: '10px',
    },
  },
  'button-close': {
    position: 'absolute',
    right: 3,
    top: 2,
    color: 'rgba(255, 255, 255, 0.24)',

    '&:hover': {
      background: 'transparent',
    },
  },
};
