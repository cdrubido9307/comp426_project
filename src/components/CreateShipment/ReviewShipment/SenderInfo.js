import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: theme.spacing(2)
    }
}));

export default function SenderInfo(props) {
    const { formValues } = props;
    const classes = useStyles();
    const { senderFirst, senderLast, senderAddress, senderCity, senderState, senderZip, senderPhone } = formValues;

    return (
        <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
                From
            </Typography>
            <Typography gutterBottom>{`${senderFirst} ${senderLast}`}</Typography>
            <Typography gutterBottom >{`${senderAddress}`}</Typography>
            <Typography gutterBottom >{`${senderCity}, ${senderState} ${senderZip}`}</Typography>
            <Typography gutterBottom >{`${senderPhone}`}</Typography>
        </Grid>
    );
}
