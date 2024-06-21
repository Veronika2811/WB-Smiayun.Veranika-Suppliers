import { CustomModal } from 'ui/CustomModal/CustomModal';

import { FormTitle } from 'components/Deliveries/DrawerModalSwitcher/components/FormTitle';
import { ModalForm } from 'components/Deliveries/ModalForm';

import { FormModalProps } from '../../types/FormModalProps';

export const FormModal = ({
  open,
  onClose,
  title,
  deliveryNumber,
  type,
  selectedDelivery,
}: FormModalProps) => (
  <CustomModal open={open} onClose={onClose}>
    <FormTitle title={title} deliveryNumber={deliveryNumber} />
    <ModalForm
      onClose={onClose}
      deliveryNumber={deliveryNumber}
      type={type}
      selectedDelivery={selectedDelivery}
    />
  </CustomModal>
);
