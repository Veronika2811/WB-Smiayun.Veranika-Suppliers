import { Delivery, TypesModal } from 'types/delivery';

export type FormModalProps = {
  title: string;
  open: boolean;
  onClose: () => void;
  type: TypesModal;
  selectedDelivery?: Delivery;
  deliveryNumber?: number;
};
