import { useCallback } from 'react';
import { Box } from '@mui/material';
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridRowId,
  GridRowParams,
} from '@mui/x-data-grid';
import { useAppSelector } from 'hooks/redux-hooks';
import { useDeleteDeliveryMutation } from 'service/api';
import { ITEMS_PER_PAGE } from 'shared/constants/constantsDeliveries';
import { suppliesSelector } from 'store/selectors';
import { CustomChip } from 'ui/CustomChip';

import { NoDeliveriesNotice } from '../NoDeliveriesNotice';

import { WarehouseAddressCell } from './components/WarehouseAddressCell';
import { deliveriesTableSx } from './styles';

export const DeliveriesTable = ({
  editDelivery,
}: {
  editDelivery: (params: GridRowParams) => void;
}) => {
  const deliveries = useAppSelector(suppliesSelector);

  const [deleteDelivery] = useDeleteDeliveryMutation();

  const handleDelete = (deliveryId: GridRowId) => deleteDelivery(deliveryId);

  const rows = deliveries ? deliveries : [];

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'Номер',
      description: 'Номер',
      width: 100,
      valueFormatter: (value) => String(value),
    },
    {
      field: 'deliveryDate',
      headerName: 'Дата поставки',
      description: 'Дата поставки',
      width: 128,
    },
    { field: 'city', headerName: 'Город', description: 'Город', width: 164 },
    {
      field: 'quantity',
      headerName: 'Количество',
      description: 'Количество',
      width: 146,
      valueFormatter: (value) => `${value} шт.`,
    },
    {
      field: 'deliveryType',
      headerName: 'Тип поставки',
      description: 'Тип поставки',
      width: 144,
    },
    {
      field: 'warehouse',
      headerName: 'Склад',
      description: 'Склад',
      flex: 1,
      minWidth: 100,
      renderCell: (params) => <WarehouseAddressCell params={params} />,
    },
    {
      field: 'status',
      headerName: 'Статус',
      description: 'Статус',
      width: 120,
      renderCell: (params) => <CustomChip value={params.value} />,
    },
    {
      field: 'actions',
      type: 'actions',
      width: 36,
      getActions: (params) => [
        <GridActionsCellItem
          key="edit"
          label="Редактировать"
          onClick={() => editDelivery(params)}
          showInMenu
        />,
        <GridActionsCellItem
          key="delete"
          label="Отменить поставку"
          onClick={() => handleDelete(params.id)}
          showInMenu
        />,
      ],
    },
  ];

  const getRowSpacing = useCallback(() => {
    return {
      top: 4,
    };
  }, []);

  return (
    <Box sx={deliveriesTableSx.container}>
      <DataGrid
        sx={deliveriesTableSx['delivery-table']}
        disableRowSelectionOnClick
        rows={rows}
        columns={columns}
        slots={{ noRowsOverlay: NoDeliveriesNotice }}
        disableColumnMenu
        disableColumnSorting
        getRowSpacing={getRowSpacing}
        rowHeight={72}
        columnHeaderHeight={36}
        initialState={{
          pagination: { paginationModel: { pageSize: ITEMS_PER_PAGE } },
        }}
        pageSizeOptions={[ITEMS_PER_PAGE]}
      />
    </Box>
  );
};
