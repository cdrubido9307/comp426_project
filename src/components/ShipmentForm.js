import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import AddMore from './AddMore';

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

export default function AddressForm() {

    const classes = useStyles();
    const [visible, setVisible] = useState(true);

    function handleOnClick() {
        setVisible(false);
    }

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                From
      </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="senderphone"
                        name="sphone"
                        label="Sender Phone"
                        fullWidth
                        autoComplete="Sender Phone"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Address line 1"
                        fullWidth
                        autoComplete="shipping address-line1"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="shipping address-level2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField required id="state" name="state" label="State/Province/Region" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        autoComplete="shipping postal-code"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Country"
                        fullWidth
                        autoComplete="shipping country"
                    />
                </Grid>    
            </Grid>
            <Typography className={classes.packages} variant="h6" gutterBottom>
                Package Information
        </Typography>
        <Grid container spacing={3} className={classes.bottom}>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="weight"
                    name="itemweight"
                    label="Package Weight"
                    fullWidth
                    autoComplete="given-weight"
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="length"
                    name="itemlength"
                    label="Length"
                    fullWidth
                    autoComplete="given-length"
                />
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="width"
                        name="itemwidth"
                        label="Width"
                        fullWidth
                        autoComplete="given-width"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="heigth"
                        name="itemheight"
                        label="Height"
                        fullWidth
                        autoComplete="given-height"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="specia-ins"
                        name="itemspecia-ins"
                        label="Special Instructions"
                        fullWidth
                        autoComplete="given-special-ins"
                    />
                </Grid>
            </Grid>
        </Grid>
        <AddMore className={classes.more} onClick={handleOnClick}/>  
        </React.Fragment>
    );
}