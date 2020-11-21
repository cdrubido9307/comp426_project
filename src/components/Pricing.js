import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Hidden
} from '@material-ui/core';
import Background from '../assets/pricingimg.jpg';
import { Link as RDLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import DraftsIcon from '@material-ui/icons/Drafts';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Footer from './Footer';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
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

const tiers = [
  {
    title: 'Basic',
    price: '4',
    description: [
      'Single user experience',
      'Up to 3 shipments at once',
      'No access to Google API'],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '10',
    description: [
      'Multiple users experience',
      'Up to 10 shipments at once',
      'Google API access',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '20',
    description: [
      'Corporate experience',
      'Ideal for large shipments',
      'All the bells and whistles',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPositionY: '31.5%',
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
  fcolor: {
    color: '#FFF',
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
    padding: theme.spacing(5, 0, 6),
  },
  mainmess: {
    fontFamily: 'Nunito',
    fontSize: '3.5rem',
    fontWeight: '900',
    color: '#FFF',
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
  footdiv: {
    position: 'absolute',
    bottom: '0px',
    minWidth: '100%'
  }
}));

export default function Header() {
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
          <h1 className={classes.menubartitle}><span className={classes.fcolor}>d</span><span className={classes.scolor}>Tracker.</span></h1>
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
                <RDLink to='/' style={{ textDecoration: 'none' }}>
                  <StyledMenuItem className={classes.iconbtn}>
                    <ListItemIcon>
                      <HomeIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </StyledMenuItem>
                </RDLink>
                <RDLink to='/about' style={{ textDecoration: 'none' }}>
                  <StyledMenuItem className={classes.iconbtn}>
                    <ListItemIcon>
                      <InfoIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                  </StyledMenuItem>
                </RDLink>
                <RDLink to='/contact' style={{ textDecoration: 'none' }}>
                  <StyledMenuItem className={classes.iconbtn}>
                    <ListItemIcon>
                      <DraftsIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Contact" />
                  </StyledMenuItem>
                </RDLink>
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
      <ThemeProvider theme={theme}>

      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography className={classes.mainmess} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Pricing
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      </ThemeProvider>
      <br />
      <br />
      <div className={classes.footdiv}>
        <Footer />
      </div>
      
    </div>
    
  );
}










