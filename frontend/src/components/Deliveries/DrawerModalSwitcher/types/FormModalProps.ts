import { Delivery, TypesModal } from 'types/delivery';

export interface FormModalProps {
  title: string;
  open: boolean;
  onClose: () => void;
  type: TypesModal;
  selectedDelivery?: Delivery;
  deliveryNumber?: number;
}
