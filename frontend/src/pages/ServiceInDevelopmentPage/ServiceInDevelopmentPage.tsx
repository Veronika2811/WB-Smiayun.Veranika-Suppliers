import ConstructionIcon from '@mui/icons-material/Construction';
import { Box, Typography } from '@mui/material';

import { serviceInDevelopmentPageSx } from './styles';

export const ServiceInDevelopmentPage = () => (
  <Box sx={serviceInDevelopmentPageSx.container}>
    <ConstructionIcon sx={serviceInDevelopmentPageSx.icon} />
    <Typography variant="h4" gutterBottom>
      Сервис находится в разработке
    </Typography>
    <Typography variant="body1">
      Мы усердно работаем над этим разделом. Пожалуйста, зайдите позже.
    </Typography>
  </Box>
);
