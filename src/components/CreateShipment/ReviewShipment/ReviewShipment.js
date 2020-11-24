import React from 'react';
import { useFormikContext } from 'formik';
import { Typography, Grid } from '@material-ui/core';
import SenderInfo from './SenderInfo';
import RecipientInfo from './RecipientInfo';
import ShipmentDetails from './ShipmentDetails';

export default function ReviewShipment() {
    const { values: formValues } = useFormikContext();
    
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipment Summary
            </Typography>
            <ShipmentDetails formValues={formValues} />
            <Grid container spacing={2}>
                <SenderInfo formValues={formValues} />
                <RecipientInfo formValues={formValues} />
            </Grid>
        </React.Fragment>
    );
}
