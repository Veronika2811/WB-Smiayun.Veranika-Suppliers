import { FormControl, Typography } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { CalendarIcon } from 'ui/icons';

import 'dayjs/locale/ru';

import { CustomCalendarHeader } from './components/CustomCalendarHeader';
import { CustomDay } from './components/CustomDay';
import { customDatePickerSx } from './styles';

type CustomDatePickerProps = {
  selectedDate: string | Dayjs;
  handleDateChange: (date: Dayjs) => void;
  error: boolean;
};

export const CustomDatePicker = ({
  selectedDate,
  handleDateChange,
  error,
}: CustomDatePickerProps) => {
  const shouldDisableDate = (day: dayjs.Dayjs) => {
    const tomorrow = dayjs().add(1, 'day');
    return day.isBefore(tomorrow, 'day');
  };

  const formatValue =
    typeof selectedDate === 'string' ? dayjs(selectedDate) : selectedDate;

  const onChangeDatePicker = (date: Dayjs | null) => {
    if (date) handleDateChange(date);
  };

  return (
    <FormControl fullWidth>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
        <Typography sx={customDatePickerSx.label}>
          {'  '}Дата поставки
        </Typography>
        <DesktopDatePicker
          value={formatValue}
          onChange={onChangeDatePicker}
          slots={{
            calendarHeader: CustomCalendarHeader,
            day: (props) => <CustomDay {...props} />,
            openPickerIcon: CalendarIcon,
          }}
          slotProps={{
            textField: { inputProps: { placeholder: '__.__.____' } },
          }}
          dayOfWeekFormatter={(date) => {
            const dayWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
            return dayWeek[date.day()];
          }}
          sx={{
            ...customDatePickerSx['date-picker'],
            '& .MuiInputBase-root .MuiOutlinedInput-notchedOutline': {
              border: error ? '1px solid red' : 'none',
            },
          }}
          shouldDisableDate={shouldDisableDate}
          showDaysOutsideCurrentMonth
        />
      </LocalizationProvider>
    </FormControl>
  );
};
