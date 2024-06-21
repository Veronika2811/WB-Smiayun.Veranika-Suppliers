import { ChangeEvent } from 'react';
import { FormControl, SelectChangeEvent, Typography } from '@mui/material';
import { Dayjs } from 'dayjs';

import { CustomSelect } from 'components/Deliveries/ModalForm/components/CustomSelect/CustomSelect';

import { NumberInputField } from '../NumberInputField/NumberInputField';

import { formFieldSx } from './styles';

type FormFieldProps = {
  label: string;
  fieldName: string;
  onChangeSelect: (event: SelectChangeEvent<string>) => void;
  onChangeTextField: (event: ChangeEvent<HTMLInputElement>) => void;
  handleListChange: (name: string, value: string) => void;
  fieldsList?: string[];
  value?: string | number | Dayjs;
};

export const FormField = ({
  label,
  onChangeSelect,
  value,
  fieldName,
  fieldsList,
  handleListChange,
  onChangeTextField,
}: FormFieldProps) => (
  <FormControl fullWidth>
    <Typography sx={formFieldSx.label}>
      {'  '}
      {label}
    </Typography>
    {fieldsList ? (
      <CustomSelect
        label={label}
        onChange={onChangeSelect}
        value={value}
        fieldName={fieldName}
        fieldsList={fieldsList}
        handleListChange={handleListChange}
        onChangeTextField={onChangeTextField}
      />
    ) : (
      <NumberInputField
        value={value}
        onChange={onChangeTextField}
        fieldName={fieldName}
        endAdornment="шт."
      />
    )}
  </FormControl>
);
