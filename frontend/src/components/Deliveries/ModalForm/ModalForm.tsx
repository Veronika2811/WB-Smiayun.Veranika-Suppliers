import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Box, SelectChangeEvent } from '@mui/material';
import { Dayjs } from 'dayjs';
import { usePostDeliveryMutation, usePutDeliveryMutation } from 'services/api';
import {
  EDIT_DELIVERY,
  NEW_DELIVERY,
} from 'shared/constants/constantsDeliveries';
import { Delivery, TypesModal } from 'types/delivery';
import { CustomDatePicker } from 'ui/CustomDatePicker/CustomDatePicker';

import { ActionButtons } from './components/ActionButtons';
import { FormField } from './components/FormField/FormField';
import { FORM_FIELDS } from './constants/formFields';
import { INITIAL_STATE_DELIVERY_FORM } from './constants/formInitialState';
import { getFormatDate } from './helpers/getFormatDate';
import { getRandomWarehousesAddress } from './helpers/getRandomWarehousesAddress';
import { modalFormSx } from './styles';

interface DeliveryFormProps {
  type: TypesModal;
  onClose: () => void;
  selectedDelivery?: Delivery;
  deliveryNumber?: number;
}

export const ModalForm = ({
  type,
  onClose,
  deliveryNumber,
  selectedDelivery,
}: DeliveryFormProps) => {
  const [formData, setFormData] = useState(INITIAL_STATE_DELIVERY_FORM);
  const [selectedDateError, setSelectedDateError] = useState(false);

  const [postDelivery] = usePostDeliveryMutation();
  const [putDelivery] = usePutDeliveryMutation();

  useEffect(() => {
    if (selectedDelivery) {
      const { deliveryDate, city, quantity, deliveryType, warehouse, status } =
        selectedDelivery;

      setFormData({
        deliveryDate,
        city,
        quantity,
        deliveryType,
        warehouse,
        status,
      });
    }
  }, [selectedDelivery]);

  const handleDateChange = (date: Dayjs) => {
    if (!date) return;
    setFormData((prevData) => ({
      ...prevData,
      deliveryDate: date,
    }));
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onChangeSelect = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;

    handleInputChange(name, value);
  };

  const onChangeTextField = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    handleInputChange(name, value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (type === NEW_DELIVERY) {
      if (!formData.deliveryDate) {
        setSelectedDateError(true);
      } else {
        setSelectedDateError(false);
      }
    }

    if (deliveryNumber && formData.deliveryDate) {
      const {
        deliveryDate,
        city,
        quantity,
        deliveryType,
        warehouse,
        warehouseAddress,
        status,
      } = formData;

      const formatDate = getFormatDate(deliveryDate);

      const newWarehouseAddress = getRandomWarehousesAddress(warehouseAddress);

      const newData = {
        id: deliveryNumber,
        deliveryDate: formatDate,
        city: city,
        quantity: Number(quantity),
        deliveryType: deliveryType,
        warehouse: warehouse,
        warehouseAddress: newWarehouseAddress,
        status: status,
      };

      if (type === NEW_DELIVERY) {
        postDelivery(newData);
      } else {
        putDelivery(newData);
      }

      clearingForm();
    }
  };

  const clearingForm = () => {
    setFormData(INITIAL_STATE_DELIVERY_FORM);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={modalFormSx.container}>
        {type !== EDIT_DELIVERY && (
          <CustomDatePicker
            selectedDate={formData.deliveryDate}
            error={selectedDateError}
            handleDateChange={handleDateChange}
          />
        )}

        {FORM_FIELDS.map((field) => {
          const fieldName = field.fieldName as keyof typeof formData;

          if (formData.hasOwnProperty(fieldName)) {
            return (
              <FormField
                key={field.fieldName}
                label={field.label}
                onChangeSelect={onChangeSelect}
                onChangeTextField={onChangeTextField}
                value={formData[fieldName]}
                fieldName={fieldName}
                fieldsList={field.fieldsList}
                handleListChange={handleInputChange}
              />
            );
          }
          return null;
        })}
      </Box>
      <ActionButtons onClose={clearingForm} type={type} />
    </form>
  );
};
