import { createTheme } from '@mui/material/styles';
import { ruRU } from '@mui/x-data-grid/locales';
import type {} from '@mui/x-data-grid/themeAugmentation';

const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#4649e5',
      },
    },
  },
  {
    components: {
      MuiUseMediaQuery: {
        defaultProps: {
          noSsr: true,
        },
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            '&.MuiButton-root': {
              fontFamily: 'ALSHauss, Helvetica, sans-serif',
              fontSize: '16px',
              letterSpacing: '0.2px',
              textTransform: 'inherit',
              whiteSpace: 'nowrap',
              color: '#ffffff',
              maxHeight: '36px',
              borderRadius: '10px',
              boxShadow: 'none',
              padding: '16px 9px 10px',

              '&.MuiButton-text:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
              },
              '&.MuiButton-containedPrimary:hover': {
                backgroundColor: '#6366f1',
              },
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: 'inset 0 0 0 1px #e3e4ea',
            borderRadius: '8px',

            '& .MuiMenuItem-root': {
              lineHeight: '200%',
            },

            '& .MuiList-root': {
              padding: 0,
            },
            '& .MuiList-root .MuiMenuItem-root.Mui-selected, & .MuiMenuItem-root:hover':
              {
                backgroundColor: '#f0f0f3',
              },
          },
        },
      },
      MuiPickersPopper: {
        styleOverrides: {
          root: {
            '& .MuiDayCalendar-header .MuiTypography-root': {
              color: '#000000',
              fontWeight: 440,
              fontSize: '13px',
              lineHeight: '123%',
              letterSpacing: '0.01em',
            },
            '& .MuiDayCalendar-header .MuiTypography-root.MuiDayCalendar-weekDayLabel:nth-of-type(n + 6)':
              {
                color: '#F96666',
              },
            '& .MuiPickersDay-root': {
              borderRadius: 0,
            },
            '& .MuiPickersDay-root.Mui-selected, & .MuiPickersDay-root:focus.Mui-selected':
              {
                background: '#e4eaff',
                color: '#000000',
              },
            '& .MuiPaper-root': {
              borderRadius: '8px',
            },
          },
        },
      },
    },
  },
  ruRU
);

export default theme;
