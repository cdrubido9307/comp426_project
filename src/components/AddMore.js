import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import ShippingItem from './ShippingItem';

const useStyles = makeStyles((theme) => ({
    info: {
        marginTop: 30,
    },
}))

export default function AddMore() {
    const classes = useStyles();
    const [visible, setVisible] = useState(false);
    const [but, setBut] = useState(true);

    function handleOnclick() {
        setVisible(true);
        setBut(false);
    }

    return (
        <Grid item xs={12}>
            {but && <Grid>
                <Fab className={classes.info} size="small" color="primary" aria-label="add">
                    <AddIcon onClick={handleOnclick} />
                </Fab>
                <Typography className={classes.toship} variant="subtitle1" gutterBottom>
                    Add More
                </Typography>
            </Grid>}
            <Grid>
                {visible && <ShippingItem />}
            </Grid>
        </Grid>
    );
}
