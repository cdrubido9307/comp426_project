// import React, { useEffect, useState } from 'react';
// import { makeStyles, withStyles } from '@material-ui/core/styles';
// import {
//     AppBar,
//     Button,
//     Collapse,
//     IconButton,
//     Toolbar,
//     Hidden
// } from '@material-ui/core';
// import Background from '../assets/aboutbg.jpg';
// import { Link } from 'react-router-dom';
// import HomeIcon from '@material-ui/icons/Home';

// import MenuIcon from '@material-ui/icons/Menu';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';

// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
// import LockOpenIcon from '@material-ui/icons/LockOpen';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import orange from '@material-ui/core/colors/orange';

// const theme = createMuiTheme({
//     palette: {
//         primary: {
//             main: orange[800],
//         },
//         secondary: {
//             main: orange[600],
//         },
//     },
// });
// const StyledMenu = withStyles({
//     paper: {
//         border: '1px solid #d3d4d5',
//     },
// })((props) => (
//     <Menu
//         elevation={0}
//         getContentAnchorEl={null}
//         anchorOrigin={{
//             vertical: 'bottom',
//             horizontal: 'center',
//         }}
//         transformOrigin={{
//             vertical: 'top',
//             horizontal: 'center',
//         }}
//         {...props}
//     />
// ));

// const StyledMenuItem = withStyles((theme) => ({
//     root: {
//         '&:focus': {
//             backgroundColor: 'none',
//             '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
//                 color: theme.palette.common.black,
//             },
//         },
//     },
// }))(MenuItem);

// const useStyles = makeStyles((theme) => ({
//     root: {
//         minHeight: '40vh',
//         backgroundImage: `url(${Background})`,
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover',
//         backgroundPositionY: '50%',
//         backgroundPositionX: '20%',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '40vh',
//         fontFamily: 'Nunito'
//     },
//     menubar: {
//         background: 'none'
//     },
//     icon: {
//         color: '#fff',
//         fontSize: '2rem'
//     },
//     menubartitle: {
//         flexGrow: '1',
//         display: "flex",
//         fontSize: '2.5rem'
//     },
//     menutoolbar: {
//         width: '80%',
//         margin: '0 auto'
//     },
//     toolbarlinks: {
//         padding: theme.spacing(1.5),
//         '&:hover': {
//             color: '#F57C00'
//         },
//         color: '#FFF',
//         fontSize: '1.6rem'
//     },
//     fcolor: {
//         color: '#FFF'
//     },
//     scolor: {
//         color: '#FF9800'
//     },
//     mainmessage: {
//         fontSize: '6rem'
//     },
//     expand: {
//         color: '#FFF',
//         fontSize: '3.5rem',
//     },
//     resposive: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         [theme.breakpoints.down('md')]: {
//             flexDirection: 'column',
//         }
//     },
//     btn: {
//         margin: theme.spacing(0.5),
//         '&:hover': {
//             backgroundColor: '#F57C00'
//         },
//         color: '#FFF',
//         backgroundColor: '#FF9800'
//     },
//     iconbtn: {
//         '&:hover': {
//             backgroundColor: '#FF9800'
//         },
//         color: '#111214',
//     }
// }));

// export default function About() {
//     const classes = useStyles();

//     const [checked, setChecked] = useState(false);
//     useEffect(() => {
//         setChecked(true);
//     }, []);

//     const [anchorEl, setAnchorEl] = React.useState(null);

//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     return (
//         <div className={classes.root} id="header">
//             <ThemeProvider theme={theme}>

//                 <AppBar className={classes.menubar} elevation={0}>
//                     <Toolbar className={classes.menutoolbar}>
//                         <h1 className={classes.menubartitle}><span className={classes.fcolor}>d</span><span className={classes.scolor}>Tracker.</span></h1>
//                         <Hidden mdDown>
//                             <Link to='/login' style={{ textDecoration: 'none' }}>
//                                 <Button variant="contained" size="medium" className={classes.btn}>
//                                     Login
//                                 </Button>
//                             </Link>
//                             <Link to='/signup' style={{ textDecoration: 'none' }}>
//                                 <Button variant="contained" size="medium" className={classes.btn}>
//                                     Sign Up
//                                 </Button>
//                             </Link>
//                         </Hidden>
//                         <div>
//                             <IconButton
//                                 aria-controls="customized-menu"
//                                 aria-haspopup="true"
//                                 variant="contained"
//                                 color="primary"
//                                 onClick={handleClick}
//                             >
//                                 <MenuIcon className={classes.icon} />
//                             </IconButton>
//                             <StyledMenu
//                                 id="customized-menu"
//                                 anchorEl={anchorEl}
//                                 keepMounted
//                                 open={Boolean(anchorEl)}
//                                 onClose={handleClose}
//                             >
//                                 <Link to='/' style={{ textDecoration: 'none' }}>
//                                     <StyledMenuItem className={classes.iconbtn}>
//                                         <ListItemIcon>
//                                             <HomeIcon fontSize="small" />
//                                         </ListItemIcon>
//                                         <ListItemText primary="Home" />
//                                     </StyledMenuItem>
//                                 </Link>
//                                 <Link to='/contact' style={{ textDecoration: 'none' }}>
//                                     <StyledMenuItem className={classes.iconbtn}>
//                                         <ListItemIcon>
//                                             <DraftsIcon fontSize="small" />
//                                         </ListItemIcon>
//                                         <ListItemText primary="Contact" />
//                                     </StyledMenuItem>
//                                 </Link>
//                                 <Link to='/pricing' style={{ textDecoration: 'none' }}>
//                                     <StyledMenuItem className={classes.iconbtn}>
//                                         <ListItemIcon>
//                                             <MonetizationOnIcon fontSize="small" />
//                                         </ListItemIcon>
//                                         <ListItemText primary="Pricing" />
//                                     </StyledMenuItem>
//                                 </Link>
//                                 <Hidden lgUp>
//                                     <Link to='/login' style={{ textDecoration: 'none' }}>
//                                         <StyledMenuItem className={classes.iconbtn}>
//                                             <ListItemIcon>
//                                                 <LockOpenIcon fontSize="small" />
//                                             </ListItemIcon>
//                                             <ListItemText primary="Login" />
//                                         </StyledMenuItem>
//                                     </Link>
//                                     <Link to='/signup' style={{ textDecoration: 'none' }}>
//                                         <StyledMenuItem className={classes.iconbtn}>
//                                             <ListItemIcon>
//                                                 <AccountCircleIcon fontSize="small" />
//                                             </ListItemIcon>
//                                             <ListItemText primary="Sign Up" />
//                                         </StyledMenuItem>
//                                     </Link>
//                                 </Hidden>
//                             </StyledMenu>
//                         </div>
//                     </Toolbar>
//                 </AppBar>
//                 <Collapse in={checked} {...(checked ? { timeout: 1500 } : {})} collapsedHeight={50}>
//                     <div>
//                         <h1 className={classes.mainmessage}>
//                             <span className={classes.fcolor}>About</span>
//                         </h1>
//                     </div>
//                 </Collapse>
//             </ThemeProvider>
//         </div>
//     );
// }





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
import Background from '../assets/aboutbg.jpg';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import DraftsIcon from '@material-ui/icons/Drafts';
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
        minHeight: '105vh',
        backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPositionY: '50%',
        backgroundPositionX: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '95vh',
        fontFamily: 'Nunito'
    },
    menubar: {
        background: 'none',
        position: 'static'
    },
    icon: {
        color: '#FFF',
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
    mainmessage: {
        fontSize: '6rem'
    },
    fcolor: {
        color: '#FFFFFF',
        fontWeight: '900'
    },
    scolor: {
        color: '#FF9800',
        fontWeight: '900'
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
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(5, 0, 6)
    },
    mainmess: {
        fontFamily: 'Nunito',
        fontSize: '3.5rem',
        fontWeight: '900',
        color: '#FFFFFF',
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
}));

export default function Prices() {
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
            <ThemeProvider theme={theme}>
                <AppBar className={classes.menubar} elevation={0}>
                    <Toolbar className={classes.menutoolbar}>
                        <h1 className={classes.menubartitle}><span className={classes.fcolor}>d</span><span className={classes.scolor}>Tracker.</span></h1>
                        <Hidden mdDown>
                            <Link to='/login' style={{ textDecoration: 'none' }}>
                                <Button variant="contained" size="medium" className={classes.btn}>
                                    Login
                                </Button>
                            </Link>
                            <Link to='/signup' style={{ textDecoration: 'none' }}>
                                <Button variant="contained" size="medium" className={classes.btn}>
                                    Sign Up
                                </Button>
                            </Link>
                        </Hidden>
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
                                <Link to='/' style={{ textDecoration: 'none' }}>
                                    <StyledMenuItem className={classes.iconbtn}>
                                        <ListItemIcon>
                                            <HomeIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary="Home" />
                                    </StyledMenuItem>
                                </Link>
                                <Link to='/contact' style={{ textDecoration: 'none' }}>
                                    <StyledMenuItem className={classes.iconbtn}>
                                        <ListItemIcon>
                                            <DraftsIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary="Contact" />
                                    </StyledMenuItem>
                                </Link>
                                <Link to='/pricing' style={{ textDecoration: 'none' }}>
                                    <StyledMenuItem className={classes.iconbtn}>
                                        <ListItemIcon>
                                            <MonetizationOnIcon fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText primary="Pricing" />
                                    </StyledMenuItem>
                                </Link>
                                <Hidden lgUp>
                                    <Link to='/login' style={{ textDecoration: 'none' }}>
                                        <StyledMenuItem className={classes.iconbtn}>
                                            <ListItemIcon>
                                                <LockOpenIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Login" />
                                        </StyledMenuItem>
                                    </Link>
                                    <Link to='/signup' style={{ textDecoration: 'none' }}>
                                        <StyledMenuItem className={classes.iconbtn}>
                                            <ListItemIcon>
                                                <AccountCircleIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Sign Up" />
                                        </StyledMenuItem>
                                    </Link>
                                </Hidden>
                            </StyledMenu>
                        </div>
                    </Toolbar>
                </AppBar>
                <Collapse in={checked} {...(checked ? { timeout: 1500 } : {})} collapsedHeight={50}>
                    <div>
                        <h1 className={classes.mainmessage}>
                            <span className={classes.fcolor}>About</span>
                        </h1>
                    </div>
                </Collapse>
            </ThemeProvider>
        </div>
    );
}
