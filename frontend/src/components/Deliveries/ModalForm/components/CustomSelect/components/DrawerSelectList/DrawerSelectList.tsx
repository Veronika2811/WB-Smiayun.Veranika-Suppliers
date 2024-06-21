import { List, ListItem, ListItemText } from '@mui/material';
import { Dayjs } from 'dayjs';
import { CheckIcon } from 'ui/Icons/CheckIcon';

import { drawerSelectListSx } from './styles';

interface DrawerSelectListProps {
  fieldsList: string[];
  handleListItemClick: (item: string) => void;
  selectedItem?: string | number | Dayjs;
}

export const DrawerSelectList = ({
  fieldsList,
  handleListItemClick,
  selectedItem,
}: DrawerSelectListProps) => (
  <List sx={drawerSelectListSx.list}>
    {fieldsList.map((item) => (
      <ListItem
        key={item}
        onClick={() => handleListItemClick(item)}
        sx={drawerSelectListSx['list-item']}
      >
        <ListItemText primary={item} />
        {selectedItem === item && <CheckIcon />}
      </ListItem>
    ))}
  </List>
);
