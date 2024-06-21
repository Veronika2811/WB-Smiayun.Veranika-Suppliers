import { Card, Grid, IconButton } from '@mui/material';
import { Delivery } from 'types/delivery';
import { CustomChip } from 'ui/CustomChip';
import { EditIcon } from 'ui/icons/EditIcon';

import { getDate } from '../../utils/getDate';
import { InfoBlock } from '../InfoBlock';

import { deliveryCardSx } from './styles';

type DeliveryCardProps = {
  card: Delivery;
  editDelivery: (params: Delivery) => void;
};

export const DeliveryCard = ({ card, editDelivery }: DeliveryCardProps) => {
  const { id, deliveryDate, status } = card;

  const date = getDate(deliveryDate);

  const onClickEditDelivery = () => editDelivery(card);

  return (
    <Card key={id} sx={deliveryCardSx.card}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item container xs={11} direction="row">
          <Grid item xs={6}>
            <InfoBlock label="Номер" value={id} />
          </Grid>
          <Grid item xs={6}>
            <InfoBlock label="Дата поставки" value={date} />
          </Grid>
          <Grid item xs={12} paddingTop="10px">
            <CustomChip value={status} />
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <IconButton
            onClick={onClickEditDelivery}
            aria-label="edit-delivery"
            title="Редактировать поставку"
          >
            <EditIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  );
};
