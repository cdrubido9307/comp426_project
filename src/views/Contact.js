import React, { useRef, useState } from 'react';
import { db } from "../firebase";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import { Link as RDLink, useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import { AppBar, Toolbar } from '@material-ui/core';

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

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#f57c00',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#F57C00',
        color: '#FFF',
        '&:hover': {
            backgroundColor: '#FB8C00'
        },
    },
    toolbar: {
        background: 'none'
    },
    close: {
        color: '#F57C00',
        marginLeft: 'auto',
    }
}));

export default function Contact() {
    const classes = useStyles();
    const history = useHistory();

    function handleOnClose() {
        history.push("/");
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection("contacts")
            .add({
                name: name,
                email: email,
                message: message,
            })
            .then(() => {
                setLoader(false);
                alert("Thank you for contacting us. We will be in touch soon!");
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setName("");
        setEmail("");
        setMessage("");
        history.push("/");
    };

    return (
        <div>
            <AppBar className={classes.menubar} position="static" elevation={0} color="transparent">
                <Toolbar className={classes.toolbar}>
                    <IconButton className={classes.close}
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={handleOnClose}
                    >
                        <CancelIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <EmailIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Contact Form
                </Typography>
                    <br />
                    <ThemeProvider theme={theme}>
                        <form onSubmit={handleSubmit} className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={(e) => setName(e.target.value)}
                                        autoComplete="fname"
                                        name="firstName"
                                        variant="outlined"
                                        fullWidth
                                        id="firstName"
                                        label="Preferred Name"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={(e) => setEmail(e.target.value)}
                                        variant="outlined"
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={(e) => setMessage(e.target.value)}
                                        id="standard-multiline-static"
                                        variant="outlined"
                                        fullWidth
                                        label="Message"
                                        multiline
                                        rows={4}
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                className={classes.submit}
                            >
                                Message Developers
                        </Button>
                        </form>
                    </ThemeProvider>
                </div>
            </Container>
        </div>
    );
}
