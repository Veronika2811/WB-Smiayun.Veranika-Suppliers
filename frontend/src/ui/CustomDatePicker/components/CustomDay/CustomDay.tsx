import { PickersDay, PickersDayProps } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

export const CustomDay = (props: PickersDayProps<dayjs.Dayjs>) => {
  const { day, outsideCurrentMonth, ...other } = props;
  const selectedMonth = dayjs().get('month');

  return (
    <PickersDay
      {...other}
      day={day}
      outsideCurrentMonth={outsideCurrentMonth}
      sx={{
        borderRadius: '0px',
        backgroundColor: '#ffffff',
        border:
          selectedMonth && !outsideCurrentMonth
            ? '1px solid #f0f0f3'
            : 'transparent',
        color: outsideCurrentMonth ? '#d1cfd7' : '#000000',
      }}
    />
  );
};
