import { ChangeEvent } from 'react';
import { Pagination } from '@mui/material';

import { cardsPaginationSx } from './styles';

interface CardsPaginationProps {
  count: number;
  page: number;
  handleChange: (_: ChangeEvent<unknown>, value: number) => void;
}

export const CardsPagination = ({
  count,
  page,
  handleChange,
}: CardsPaginationProps) => (
  <Pagination
    count={count}
    page={page}
    onChange={handleChange}
    color="primary"
    sx={cardsPaginationSx.pagination}
  />
);
