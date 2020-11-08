import React from 'react';

import SecurityIcon from '@material-ui/icons/Security';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PlaceIcon from '@material-ui/icons/Place';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px'
    },
    b1: {
        marginRight: '320px'
    },
    b2: {

    },
    b3: {
        marginLeft: '320px'
    },
    icons: {
        fontSize: '50px'
    }
}));

export default function Motivation() {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.root}>
                <Box className={classes.b1}>
                    <LocalShippingIcon className={classes.icons} />
                </Box>
                <Box className={classes.b2}>
                    <PlaceIcon className={classes.icons} />
                </Box>
                <Box className={classes.b3}>
                    <SecurityIcon className={classes.icons} />
                </Box>
            </Box>
        </div>
    );
}
