import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
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
        overflowX: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
        '&:hover': {
            color: '#F57C00'
        }
    },
    login: {
        paddingLeft: '100px'
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
                        <Link underline='none' className={classes.toolbarLink} key={section.title} variant='h6' href={section.url}>
                            {section.title}
                        </Link>
                    ))}
                    <div className={classes.login}>
                        <Button variant="contained" size="medium" color="primary" className={classes.margin}>
                            Login
                        </Button>
                        <Button variant="contained" size="medium" color="primary" className={classes.margin}>
                            SignUp
                        </Button>
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


