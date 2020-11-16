import React, { useState, useRef } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import { Link as RDLink, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { AppBar, Toolbar } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';

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
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  lockout: {
    // No properties
  },
  input: {
    //
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#f57c00',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
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

export default function SignIn() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/user-dashboard")
    } catch {
      setError("Failed to login. Please verify your credentials!");
    }

    setLoading(false);
  }

  function handleOnClose() {
    history.push("/");
  }

  const classes = useStyles();

  return (
    <div>
    <AppBar className={classes.menubar} position="static" elevation={0} color="transparent">
        <Toolbar className={classes.toolbar}>
        <IconButton className={classes.close}
              aria-label="account of current user"
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
          <LockOutlinedIcon className={classes.lockout} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <br/>
        {error && <Alert severity="error">{error}</Alert>}
        <ThemeProvider theme={theme}>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <TextField className={classes.input}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              inputRef={emailRef}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField className={classes.input} theme={theme}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              inputRef={passwordRef}
              autoComplete="current-password"
            />
              <Button disabled={loading}
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
              >
                Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
              </Link>
              </Grid>
              <Grid item>
                <RDLink to='/signup' style={{ textDecoration: 'none' }}>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </RDLink>
              </Grid>
            </Grid>
          </form>
        </ThemeProvider>
      </div>

    </Container>
    </div>
  );
}
