import React, { useEffect, useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { 
    AppBar, 
    Button, 
    Collapse, 
    IconButton, 
    Toolbar, 
    Hidden } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Background from '../assets/bgimg.jpg';
import { Link as Scroll } from 'react-scroll';
import { Link as RDLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPositionY: '50%',
        backgroundPositionX: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '95vh',
        fontFamily: 'Nunito'
    },
    menubar: {
        background: 'none'
    },
    icon: {
        color: '#fff',
        fontSize: '2rem'
    },
    menubartitle: {
        flexGrow: '1',
        display: "flex",
        fontSize: '2.5rem'
    },
    menutoolbar: {
        width: '80%',
        margin: '0 auto'
    },
    toolbarlinks: {
        padding: theme.spacing(1.5),
        '&:hover': {
            color: '#F57C00'
        },
        color: '#FFF',
        fontSize: '1.6rem'
    },
    fcolor: {
        color: '#FFF'
    },
    scolor: {
        color: '#FF9800'
    },
    mainmessage: {
        fontSize: '2.8rem'
    },
    expand: {
        color: '#FFF',
        fontSize: '3.5rem',
    },
    resposive: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        }
    },
    btn: {
        margin: theme.spacing(0.5),
        '&:hover': {
            backgroundColor: '#F57C00'
        },
        color: '#FFF',
        backgroundColor: '#FF9800'
    }
}));

export default function Header() {
    const classes = useStyles();

    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);

    return (
            <div className={classes.root} id="header">
                <AppBar className={classes.menubar} elevation={0}>
                    <Toolbar className={classes.menutoolbar}>
                        <h1 className={classes.menubartitle}><span className={classes.fcolor}>d</span><span className={classes.scolor}>Tracker.</span></h1>
                        <Hidden xsDown>
                            <RDLink to='/login' style={{textDecoration: 'none'}}>
                                <Button variant="contained" size="medium" className={classes.btn}>
                                    Login
                                </Button>
                            </RDLink>
                            <RDLink to='/signup' style={{textDecoration: 'none'}}>
                                <Button variant="contained" size="medium" className={classes.btn}>
                                    Sign Up
                                </Button>
                            </RDLink>
                        </Hidden>
                        
                        <IconButton>
                            <MenuIcon className={classes.icon}/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Collapse in={checked} {...(checked ? {timeout: 1500} : {})} collapsedHeight={50}>
                    <div>
                        <h1 className={classes.mainmessage}>
                            <span className={classes.fcolor}>A Tracking System</span><br/>
                            <span className={classes.scolor}>For Online Success!</span>
                        </h1>
                        <Scroll to="service-specs">
                            <IconButton>
                                <ExpandMoreIcon className={classes.expand}/>
                            </IconButton>
                        </Scroll>                
                    </div>
                </Collapse>
            </div>
    );
}

