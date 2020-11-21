import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

export default function ShipmentDetails(props) {
  const { formValues } = props;
  const { weight, length, height, width } = formValues;

  return (
    <List disablePadding>
        <ListItem>
          <ListItemText primary={'Package Information'} secondary={`Weight: ${weight} lb | L: ${length} x H: ${height} x W: ${width}`} />
        </ListItem>
    </List>
  );
}
