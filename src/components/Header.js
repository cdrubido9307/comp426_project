import React from 'react';
import PropTypes from 'prop-types';

import {Link} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: orange[50],
        },
        secondary: {
            main: orange[700],
        },
    },
});

const useStyles = makeStyles((theme) => ({
    toolbar: {
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row'
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
        '&:hover': {
            color: '#F57C00'
        },
        color: '#FFF3E0'
    },
    login: {
        paddingLeft: '90px'
    },
    margin: {
        margin: theme.spacing(1),
        '&:hover': {
            backgroundColor: '#F57C00'
        }
    },
}));

export default function Header(props) {
    const classes = useStyles();
    const { sections, title } = props;

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Toolbar component="nav" variant="dense" className={classes.toolbar}>
                    {sections.map((section) => (
                        <Link to={section.path} style={{textDecoration: 'none', fontSize: '20px'}} className={classes.toolbarLink} key={section.title} variant='h6'>
                            {section.title}
                        </Link>
                    ))}
                    <div className={classes.login}>
                        <Link to='/login' style={{textDecoration: 'none'}}>
                            <Button variant="contained" size="medium" color="primary" className={classes.margin}>
                                Login
                            </Button>
                        </Link>
                        <Link to='/signup' style={{textDecoration: 'none'}}>
                            <Button variant="contained" size="medium" color="primary" className={classes.margin}>
                                Sign Up
                            </Button>
                        </Link>
                    </div>
                </Toolbar>
            </ThemeProvider>
        </React.Fragment>
    );
}

Header.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};
