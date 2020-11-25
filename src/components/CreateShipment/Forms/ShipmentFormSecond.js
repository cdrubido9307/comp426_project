import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InputField from '../FormModel/InputField';

export default function ShipmentFormSecond(props) {
    const {
        formField: {
            recipientFirst,
            recipientLast,
            recipientPhone,
            recipientAddress,
            recipientCity,
            recipientState,
            recipientZip,
            recipientCountry,
        }
    } = props;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                To
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <InputField name={recipientFirst.name} label={recipientFirst.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField name={recipientLast.name} label={recipientLast.label} fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <InputField name={recipientPhone.name} label={recipientPhone.label} fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <InputField name={recipientAddress.name} label={recipientAddress.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField name={recipientCity.name} label={recipientCity.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField name={recipientState.name} label={recipientState.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField name={recipientZip.name} label={recipientZip.label} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputField name={recipientCountry.name} label={recipientCountry.label} fullWidth />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
