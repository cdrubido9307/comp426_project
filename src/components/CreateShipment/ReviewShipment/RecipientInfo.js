import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(2),
    }
}));

export default function SenderInfo(props) {
  const { formValues } = props;
  const classes = useStyles();
  const { recipientFirst, recipientLast, recipientAddress, recipientCity, recipientState, recipientZip, recipientPhone } = formValues;

  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        To
      </Typography>
      <Typography gutterBottom>{`${recipientFirst} ${recipientLast}`}</Typography>
      <Typography gutterBottom >{`${recipientAddress}`}</Typography>
      <Typography gutterBottom >{`${recipientCity}, ${recipientState} ${recipientZip}`}</Typography>
      <Typography gutterBottom >{`${recipientPhone}`}</Typography>
    </Grid>
  );
}
