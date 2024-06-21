import dayjs from 'dayjs';
import { FORMAT_DATE_D_M_Y } from 'shared/constants/constantsDeliveries';

export const getFormatDate = (date: string | dayjs.Dayjs) => {
  if (typeof date === 'string') {
    return date;
  }

  return dayjs(date).format(FORMAT_DATE_D_M_Y);
};
