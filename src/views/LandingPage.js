import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceSpecs from '../components/ServiceSpecs';

const useStyles = makeStyles((theme) => ({
    root: {
    }
}));

export default function LandingPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <ServiceSpecs />
            <Footer />
        </div>
    );
}
