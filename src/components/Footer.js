import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Link as RDLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    footer: {
        fontFamily: 'Nunito',
        backgroundColor: '#313234',
        paddingBottom: theme.spacing(3),
    },
    footerbar: {
        justifyContent: 'center',
    },
    linkage: {
        padding: theme.spacing(0, 3),
        fontSize: '1.3rem',
        color: '#FFF',
        fontWeight: '600'
    },
    copyr: {
        color: '#FFF'
    }
}));

export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Toolbar className={classes.footerbar}>
                    <RDLink to='/' style={{ textDecoration: 'none' }} className={classes.linkage}>Home</RDLink>
                    <RDLink to='/about' style={{ textDecoration: 'none' }} className={classes.linkage}>About</RDLink>
                    <RDLink to='/contact' style={{ textDecoration: 'none' }} className={classes.linkage}>Contact</RDLink>
                    <RDLink to='/pricing' style={{ textDecoration: 'none' }} className={classes.linkage}>Pricing</RDLink>
                </Toolbar>
                <Typography className={classes.copyr} variant="subtitle1" align="center">
                    {'Copyright ©️ dTracker '}
                    {new Date().getFullYear()}
                    {' All Rights Reserved.'}
                </Typography>
            </Container>
        </footer>
    );
}