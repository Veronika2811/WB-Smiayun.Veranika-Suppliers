import dayjs, { Dayjs } from 'dayjs';
import { FORMAT_DATE_D_M_Y } from 'shared/constants/constantsDeliveries';

export const getDate = (date: string | Dayjs) => {
  if (typeof date === 'string') return date;

  return dayjs(date).format(FORMAT_DATE_D_M_Y);
};
