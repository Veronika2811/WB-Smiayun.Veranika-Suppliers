import { Delivery } from 'types/delivery';

import { NoDeliveriesNotice } from 'components/Deliveries/NoDeliveriesNotice';

import { DeliveryCard } from '../DeliveryCard';

type CardListProps = {
  editDelivery: (params: Delivery) => void;
  paginatedItems: Delivery[];
};

export const CardList = ({ editDelivery, paginatedItems }: CardListProps) => {
  if (paginatedItems.length) {
    return (
      <>
        {paginatedItems.map((card) => (
          <DeliveryCard key={card.id} card={card} editDelivery={editDelivery} />
        ))}
      </>
    );
  }

  return <NoDeliveriesNotice />;
};
