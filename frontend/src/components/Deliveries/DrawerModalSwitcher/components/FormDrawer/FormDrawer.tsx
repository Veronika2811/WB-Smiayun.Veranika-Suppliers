import { CustomDrawer } from 'ui/CustomDrawer/CustomDrawer';

import { FormTitle } from 'components/Deliveries/DrawerModalSwitcher/components/FormTitle';
import { ModalForm } from 'components/Deliveries/ModalForm/ModalForm';

import { FormModalProps } from '../../types/FormModalProps';

export const FormDrawer = ({
  open,
  title,
  type,
  onClose,
  deliveryNumber,
  selectedDelivery,
}: FormModalProps) => (
  <CustomDrawer open={open} setOpen={onClose}>
    <FormTitle title={title} deliveryNumber={deliveryNumber} />
    <ModalForm
      onClose={onClose}
      deliveryNumber={deliveryNumber}
      type={type}
      selectedDelivery={selectedDelivery}
    />
  </CustomDrawer>
);
