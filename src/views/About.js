import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Button,
    Collapse,
    IconButton,
    Toolbar,
    Hidden
} from '@material-ui/core';
import Background from '../assets/aboutimg.jpg';
import { Link as RDLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import DraftsIcon from '@material-ui/icons/Drafts';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: orange[800],
        },
        secondary: {
            main: orange[600],
        },
    },
});
const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: 'none',
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.black,
            },
        },
    },
}))(MenuItem);

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
        fontSize: '6rem'
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
    },
    iconbtn: {
        '&:hover': {
            backgroundColor: '#FF9800'
        },
        color: '#111214',
    }
}));

export default function About() {
    const classes = useStyles();

    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.menubar} elevation={0}>
                <Toolbar className={classes.menutoolbar}>
                    <h1 className={classes.menubartitle}>
                        <RDLink to='/' style={{ textDecoration: 'none' }}>
                            <span className={classes.fcolor}>d</span><span className={classes.scolor}>Tracker.</span>
                        </RDLink>
                    </h1>
                    <Hidden mdDown>
                        <RDLink to='/login' style={{ textDecoration: 'none' }}>
                            <Button variant="contained" size="medium" className={classes.btn}>
                                Login
                                </Button>
                        </RDLink>
                        <RDLink to='/signup' style={{ textDecoration: 'none' }}>
                            <Button variant="contained" size="medium" className={classes.btn}>
                                Sign Up
                            </Button>
                        </RDLink>
                    </Hidden>
                    <ThemeProvider theme={theme}>
                        <div>
                            <IconButton
                                aria-controls="customized-menu"
                                aria-haspopup="true"
                                variant="contained"
                                color="primary"
                                onClick={handleClick}
                            >
                                <MenuIcon className={classes.icon} />
                            </IconButton>
                            <StyledMenu
                                id="customized-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <StyledMenuItem className={classes.iconbtn}>
                                    <ListItemIcon>
                                        <InfoIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="About" />
                                </StyledMenuItem>
                                <StyledMenuItem className={classes.iconbtn}>
                                    <ListItemIcon>
                                        <DraftsIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Contact" />
                                </StyledMenuItem>
                                <StyledMenuItem className={classes.iconbtn}>
                                    <ListItemIcon>
                                        <MonetizationOnIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary="Pricing" />
                                </StyledMenuItem>
                                <Hidden lgUp>
                                    <RDLink to='/login' style={{ textDecoration: 'none' }}>
                                        <StyledMenuItem className={classes.iconbtn}>
                                            <ListItemIcon>
                                                <LockOpenIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Login" />
                                        </StyledMenuItem>
                                    </RDLink>
                                    <RDLink to='/signup' style={{ textDecoration: 'none' }}>
                                        <StyledMenuItem className={classes.iconbtn}>
                                            <ListItemIcon>
                                                <AccountCircleIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Sign Up" />
                                        </StyledMenuItem>
                                    </RDLink>
                                </Hidden>
                            </StyledMenu>
                        </div>
                    </ThemeProvider>
                </Toolbar>
            </AppBar>
            <Collapse in={checked} {...(checked ? { timeout: 1500 } : {})} collapsedHeight={50}>
                <div>
                    <h1 className={classes.mainmessage}>
                        <span className={classes.fcolor}>About</span>
                    </h1>
                </div>
            </Collapse>
        </div>
    );
}
