import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems } from '../components/ListItems';
import Chart from '../components/Chart';
import Expenses from '../components/Expenses';
import Shippings from '../components/Shippings';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { db } from '../firebase';
import { GoogleMap, LoadScript, Marker, GoogleApiWrapper, Map } from '@react-google-maps/api';
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyBzZTUso8wmNfmjDzvD1agPDwcGBUsvlR4");
Geocode.setLanguage("en");
Geocode.setRegion("us");
const google = window.google

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24,
        backgroundColor: '#FF9800'
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: {
        marginTop: '400px',
    },
    content: {
        flexGrow: 1,
        marginTop: '2rem',
        height: '100vh',
        overflow: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    username: {
        marginTop: 5,
    },
}));

const containerStyle = {
    width: '85%',
    height: '85%',
};

const center = {
    lat: 35.913200,
    lng: -79.055847,
};

export default function Dashboard() {
    const classes = useStyles();
    const { currentUser, logout } = useAuth();
    const [error, setError] = useState("");
    const [user, setUser] = useState("");
    const history = useHistory();
    const [open, setOpen] = useState(true);
    const [shipment, setShipments] = useState([]);
    const [positions, setPositions] = useState([]);
    const [path, setPath] = useState([]);
    const [loading, setLoading] = useState(false);
    const shipmentRef = db.collection('shipments').where('clientId', '==', currentUser.uid);
    
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    async function handleLogout() {
        setError("");

        try {
            await logout();
            history.push("/");
        } catch {
            setError("Failed to log out");
        }
    }

    function getPositions(address) {
        const pos = {}

        Geocode.fromAddress(address).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                pos.lat = lat;
                pos.lng = lng;
            },
            error => {
                console.log(error);
            }
        )
        return pos;
    }

    function getShipments() {
        setLoading(true);
        shipmentRef.onSnapshot((querySnapshot) => {
            const items = [];
            const add = [];
            const p = [];
            const paths = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });

            const tmp = items.filter(s => s.status == false);
            for (let i = 0; i < tmp.length; i++) {
                add.push({ from: tmp[i].driver.currentLocation, pick: tmp[i].senderAddress + " " + tmp[i].senderCity + " " + tmp[i].senderState, dest: tmp[i].recipientAddress + " " + tmp[i].recipientCity + " " + tmp[i].recipientState });
            }
            for (let i = 0; i < add.length; i++) {
                p.push({ from: getPositions(add[i].from), pick: getPositions(add[i].pick), dest: getPositions(add[i].dest) });
            }
            for (let i = 0; i < p.length; i++) {
                paths.push([p[i].from, p[i].pick, p[i].dest]);
            }

            setShipments(items);
            setPositions(p);
            setPath(paths);
            setLoading(false);
        })
    }

    useEffect(() => {
        getShipments();
    }, []);

    const options = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        radius: 30000,
        paths: path[0],
        zIndex: 1,
    };

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const clientRef = db.collection('client');

    function handleGetUser() {
        if (currentUser != null) {
            clientRef.doc(currentUser.uid).get().then(snapshot => setUser(snapshot.data()));
        }
    }

    useEffect(() => {
        handleGetUser();
    }, []);

    const name = user.firstName + " " + user.lastName;

    const [anchorEl, setAnchorEl] = useState(false);
    const open2 = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Shipping Dashboard
                    </Typography>
                    <Typography className={classes.username} variant="subtitle1" gutterBottom>
                        {name}
                    </Typography>
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open2}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => {
                                handleClose();
                                handleLogout();
                            }}>Sign out</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <LoadScript
                    googleMapsApiKey="AIzaSyBzZTUso8wmNfmjDzvD1agPDwcGBUsvlR4"
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                    >
                    </GoogleMap>
                </LoadScript>
            </main>
        </div>
    );
}
