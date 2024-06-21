import dayjs, { Dayjs } from 'dayjs';

export const dateFormatting = (date: string | Dayjs) => {
  if (!date) {
    return null;
  } else if (typeof date === 'string') {
    return dayjs(date);
  }

  return date;
};
