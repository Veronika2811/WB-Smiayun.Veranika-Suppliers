import { useCustomMediaQuery } from 'hooks/useCustomMediaQuery';
import { NEW_DELIVERY } from 'shared/constants/constantsDeliveries';
import { Delivery, TypesModal } from 'types/delivery';

import { FormDrawer } from 'components/Deliveries/DrawerModalSwitcher/components/FormDrawer/FormDrawer';
import { FormModal } from 'components/Deliveries/DrawerModalSwitcher/components/FormModal/FormModal';

interface DrawerModalSwitcherProps {
  open: boolean;
  closeModal: () => void;
  typeModal: TypesModal;
  deliveryNumber?: number;
  selectedDelivery?: Delivery;
}

export const DrawerModalSwitcher = ({
  open,
  closeModal,
  deliveryNumber,
  typeModal,
  selectedDelivery,
}: DrawerModalSwitcherProps) => {
  const { isTablet } = useCustomMediaQuery();

  const modalTitle =
    typeModal === NEW_DELIVERY ? 'Новая поставка' : 'Редактирование';

  if (!isTablet) {
    return (
      <FormDrawer
        open={open}
        onClose={closeModal}
        title={modalTitle}
        deliveryNumber={deliveryNumber}
        type={typeModal}
        selectedDelivery={selectedDelivery}
      />
    );
  }

  return (
    <FormModal
      open={open}
      onClose={closeModal}
      title={modalTitle}
      deliveryNumber={deliveryNumber}
      type={typeModal}
      selectedDelivery={selectedDelivery}
    />
  );
};
