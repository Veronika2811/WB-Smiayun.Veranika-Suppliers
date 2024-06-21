export const customDrawerSx = {
  drawer: {
    '& .MuiDrawer-paper': {
      background: '#2d2c32',
      boxShadow: 'none',
      padding: '19px 16px 16px',
    },
  },
  'close-icon': {
    position: 'absolute',
    right: 2,
    top: 1,
    color: 'rgba(255, 255, 255, 0.24)',
    transition: 'color 0.3s',

    '&:hover': {
      background: 'transparent',
      color: '#ffffff',
    },
  },
};
