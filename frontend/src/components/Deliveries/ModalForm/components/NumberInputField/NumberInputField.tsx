import { ChangeEvent } from 'react';
import { TextField, Typography } from '@mui/material';
import { Dayjs } from 'dayjs';

import { numberInputFieldSx } from './styles';

type NumberInputFieldProps = {
  fieldName: string;
  endAdornment: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string | number | Dayjs;
};

export const NumberInputField = ({
  value,
  onChange,
  fieldName,
  endAdornment,
}: NumberInputFieldProps) => (
  <TextField
    fullWidth
    value={value}
    onChange={onChange}
    name={fieldName}
    required
    type="number"
    InputProps={{
      endAdornment: <Typography>{endAdornment}</Typography>,
      inputProps: { min: 1 },
    }}
    size="small"
    sx={numberInputFieldSx.input}
  />
);
