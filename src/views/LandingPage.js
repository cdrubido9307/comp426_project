import React from 'react';
import Header from '../components/Header';
import Motivation from '../components/Motivation';

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia } from '@material-ui/core';

import TruckRoad from '../assets/truckroad.png';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center'

    },
    header: {
        position: 'absolute',
        top: '2%',
        width: '60%',
    },
    dtracker: {
        position: 'absolute',
        top: '35%',
        marginRight: '450px',
        color: '#FFF3E0'
    },
    hh1: {
        fontSize: '48px'
    },
    hh2: {
        fontSize: '32px'
    }

}));

const sections = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
    { title: 'Delivery', path: '/delivery' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
];

export default function LandingPage() {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardMedia component="img" alt="Truck on Road" height="500" image={TruckRoad} title="Truck on Road" />
                <div className={classes.header}>
                    <Header sections={sections} title="Toolbar" />
                </div>
                <div className={classes.dtracker}>
                    <h1 className={classes.hh1}>dTracker</h1>
                    <h1 className={classes.hh2}>A Tracking System<br />For Online Sucess</h1>
                </div>
            </Card>
            <Motivation />
        </div>
    );
}



