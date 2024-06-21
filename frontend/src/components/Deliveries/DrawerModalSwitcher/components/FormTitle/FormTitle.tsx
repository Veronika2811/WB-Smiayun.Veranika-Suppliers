import { Typography } from '@mui/material';

import { formTitleSx } from './styles';

type DeliveryFormTitleProps = {
  title: string;
  deliveryNumber?: number;
};

export const FormTitle = ({
  title,
  deliveryNumber,
}: DeliveryFormTitleProps) => (
  <>
    <Typography sx={formTitleSx.title}>{title}</Typography>
    <Typography sx={formTitleSx.subtitle}>#{deliveryNumber}</Typography>
  </>
);
