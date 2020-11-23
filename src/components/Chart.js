import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Title from './Title';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  }
}));

export default function Chart(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Your deliveries are being handle by</Title>
      <div>
      <List>
          <ListItem>
          <ListItemText id="profile-image" primary="Profile Picture" />
          <ListItemText id="phone" primary="Phone" />
        </ListItem>
        </List>
        {props.shipment.filter(s => s.status == false).map((s) => (
          <List>
          <ListItem>
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src={s.driver.avatarPic}
            />
          </ListItemAvatar>
          <ListItemText id={s.driver.firstName} primary={`${s.driver.firstName} ${s.driver.lastName}`} />
          <ListItemText id={s.driver.firstName} primary={`${s.driver.phone}`} />
        </ListItem>
        </List>
        ))}
      </div>
    </React.Fragment>
  );
}