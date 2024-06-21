import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { PickersCalendarHeaderProps } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';

import { customCalendarHeaderSx } from './styles';

export const CustomCalendarHeader = (
  props: PickersCalendarHeaderProps<Dayjs>
) => {
  const { currentMonth, onMonthChange } = props;

  const selectNextMonth = () =>
    onMonthChange(currentMonth.add(1, 'month'), 'left');

  const selectPreviousMonth = () =>
    onMonthChange(currentMonth.subtract(1, 'month'), 'right');

  return (
    <Box sx={customCalendarHeaderSx.header}>
      <Stack spacing={1} direction="row">
        <IconButton
          aria-label="previous-month"
          onClick={selectPreviousMonth}
          title="Предыдущий месяц"
        >
          <ArrowBackOutlinedIcon sx={customCalendarHeaderSx.icon} />
        </IconButton>
      </Stack>
      <Typography variant="body2" sx={customCalendarHeaderSx.title}>
        {currentMonth.format('MMMM YYYY')}
      </Typography>
      <Stack spacing={1} direction="row">
        <IconButton
          aria-label="next-month"
          onClick={selectNextMonth}
          title="Следующий месяц"
        >
          <ArrowForwardOutlinedIcon sx={customCalendarHeaderSx.icon} />
        </IconButton>
      </Stack>
    </Box>
  );
};
