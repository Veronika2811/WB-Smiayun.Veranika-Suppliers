import { Box, Typography } from '@mui/material';

import { notFoundPageSx } from './styles';

export const NotFoundPage = () => (
  <Box sx={notFoundPageSx.container}>
    <Typography variant="h4" gutterBottom>
      Страница не найдена
    </Typography>
    <Typography variant="body1">
      Извините, запрашиваемая вами страница не найдена.
    </Typography>
  </Box>
);
