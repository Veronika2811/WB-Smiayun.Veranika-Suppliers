export const deliveriesTableSx = {
  container: {
    width: '100%',
  },
  'delivery-table': {
    '&.MuiDataGrid-root, & .MuiDataGrid-cell, & .MuiDataGrid-withBorderColor': {
      border: 'none',
    },
    '& .MuiDataGrid-filler': {
      display: 'none',
    },
    '& .MuiDataGrid-footerContainer, & .MuiToolbar-root': {
      color: '#ffffff',
    },
    '& .MuiIconButton-root.Mui-disabled': {
      color: '#ffffffa6',
    },
    '& .MuiDataGrid-cell': {
      fontWeight: 560,
      fontSize: '16px',
      fontFamily: 'ALSHauss, Helvetica, Arial, sans-serif',
      paddingTop: '3px',
      lineHeight: 2,
      display: 'flex',
      alignItems: 'center',
    },
    '& .MuiDataGrid-container--top [role=row], & .MuiDataGrid-container--top:after':
      {
        background: 'transparent',
        color: '#ffffff',
      },
    '& .MuiDataGrid-columnSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-row': {
      background: 'rgba(255, 255, 255, 0.08)',
      color: '#ffffff',
      borderRadius: '14px',
    },
    '& .MuiDataGrid-row:hover, & .MuiDataGrid-row.Mui-selected, & .MuiDataGrid-row.Mui-selected:hover':
      {
        background: 'rgba(255, 255, 255, 0.24)',
      },
    '& .MuiDataGrid-cell:focus, & .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus-within':
      {
        outline: 'none',
      },
    '& .MuiDataGrid-columnHeader': {
      fontSize: '13px',
      lineHeight: '123%',
      letterSpacing: '0.01em',
    },
    '& .MuiDataGrid-columnHeaderTitle': {
      fontSize: '13px',
      lineHeight: '123%',
      letterSpacing: '0.01em',
      fontFamily: 'ALSHauss, Helvetica, Arial, sans-serif',
      paddingTop: '4px',
    },
    '& .MuiIconButton-root': {
      color: '#ffffff',
    },
    '& .MuiDataGrid-overlayWrapper': {
      minHeight: '300px',
    },
  },
};
