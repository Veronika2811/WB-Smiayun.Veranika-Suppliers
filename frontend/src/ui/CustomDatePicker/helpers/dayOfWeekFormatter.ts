import dayjs from 'dayjs';

export const dayOfWeekFormatter = (date: dayjs.Dayjs) => {
  const dayWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  return dayWeek[date.day()];
};
