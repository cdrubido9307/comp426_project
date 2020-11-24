import React from 'react';
import { Typography } from '@material-ui/core';

export default function PlaceOrder(props) {
    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom>
                Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
                Your delivery number is #{props.values.deliveryNumber}. We have emailed your delivery confirmation,
                and will send you an update when your order has shipped.
            </Typography>
        </React.Fragment>
    );
}
