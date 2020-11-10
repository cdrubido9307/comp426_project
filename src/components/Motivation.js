import React from 'react';

import SecurityIcon from '@material-ui/icons/Security';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PlaceIcon from '@material-ui/icons/Place';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '20px',
        paddingLeft: '15px',
        paddingRight: '15px',
        background: '#FFB74D'
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
                <Box
                    container
                    spacing={0}
                    align='center'
                    justify='center'
                    direction='column'
                    paddingRight='100px'
                >
                    <SecurityIcon className={classes.icons} />
                    <h3>Reliable</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </Box>

                <Box
                    container
                    spacing={0}
                    align='center'
                    justify='center'
                    direction='column'
                >
                    <PlaceIcon className={classes.icons} />
                    <h3>Worldwide</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </Box>
                
                <Box
                    container
                    spacing={0}
                    align='center'
                    justify='center'
                    direction='column'
                    paddingLeft='100px'
                >
                    <LocalShippingIcon className={classes.icons} />
                    <h3>Delivery</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </Box>
            </Box>
        </div>
    );
}
