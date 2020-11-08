import React from 'react';
import Header from '../components/Header';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia } from '@material-ui/core';

import TruckRoad from '../assets/truckroad.png';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        display:'flex',
        justifyContent: 'center'
        
    },
    header: {
        position: 'absolute',
        top: '2%',
        width: '60%',
    }
}));

const sections = [
    { title: 'Home', url: '#' },
    { title: 'Services', url: '#' },
    { title: 'Delivery', url: '#' },
    { title: 'About', url: '#' },
    { title: 'Contact', url: '#' },
];

export default function LandingPage() {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardMedia component="img" alt="Truck on Road" height="500" image={TruckRoad} title="Truck on Road"/>
                <div className={classes.header}>
                    <Header sections={sections} title="Toolbar" />
                </div>
            </Card>
        </div>
    );
}
