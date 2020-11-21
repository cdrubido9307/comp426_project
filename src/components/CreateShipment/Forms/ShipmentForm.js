import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputField from '../FormModel/InputField';

const useStyles = makeStyles((theme) => ({
    bitem: {
        marginTop: 3,
        backgroundColor: '#FFB74D'
    },
    toship: {
        marginTop: 5,
        color: '#7E7E7E',
    },
    packages: {
        marginTop: 30,
        marginBottom: 10,
    },
    bottom: {
        marginBottom: 30,
    }
}))

export default function ShipmentForm(props) {
    const classes = useStyles();

    const {
        formField: {
            senderFirst,
            senderLast,
            senderPhone,
            senderAddress,
            senderCity,
            senderState,
            senderZip,
            senderCountry,
            weight,
            length,
            height,
            width,
            instructions,
        }
    } = props;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipment Form
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <InputField name={senderFirst.name} label={senderFirst.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField name={senderLast.name} label={senderLast.label} fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <InputField name={senderPhone.name} label={senderPhone.label} fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <InputField name={senderAddress.name} label={senderAddress.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField name={senderCity.name} label={senderCity.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField name={senderState.name} label={senderState.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField name={senderZip.name} label={senderZip.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField name={senderCountry.name} label={senderCountry.label} fullWidth />
                </Grid>    
            </Grid>
            <Typography className={classes.packages} variant="h6" gutterBottom>
                Package Information
            </Typography>
            <Grid container spacing={3} className={classes.bottom}>
                <Grid item xs={12} sm={6}>
                    <InputField name={weight.name} label={weight.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField name={length.name} label={length.label} fullWidth />
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <InputField name={height.name} label={height.label} fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputField name={width.name} label={width.label} fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                        <InputField name={instructions.name} label={instructions.label} fullWidth />
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}