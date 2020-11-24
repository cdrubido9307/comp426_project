import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import AddMore from './AddMore';

const useStyles = makeStyles((theme) => ({
    info: {
        marginTop: 30
    },
    addmore: {
        marginTop: 50
    },
    packages: {
        marginTop: 20,
    }
}))

export default function ShippingItem() {

    const classes = useStyles();
    const [addmore, setAddmore] = useState(false);

    function handleOnclick() {
        setAddmore(true);
    }

    return (
        <React.Fragment>
            <Typography className={classes.packages} variant="h6" gutterBottom>
                Package Information
            </Typography>
            <Grid className={classes.bottom} container spacing={3}>
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
                <AddMore onClick={handleOnclick} className={classes.addmore} />
            </Grid>
        </React.Fragment>
    );
}
