import React, { useRef, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import { Link as RDLink, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#f57c00',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#F57C00',
    color: '#FFF',
    '&:hover': {
      backgroundColor: '#FB8C00'
  },
  },
}));

export default function SignUp() {

  const firstRef = useRef();
  const lastRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    
    if(passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match. Please try again!');
    }

    try {
      setError('');
      setLoading(true);
      await signup(firstRef.current.value, lastRef.current.value, emailRef.current.value, passwordRef.current.value);
      history.push("/user-dashboard");
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false)
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <br/>
        {error && <Alert severity="error">{error}</Alert>}
        <ThemeProvider theme={theme}>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                inputRef={firstRef}
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                inputRef={lastRef}
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                inputRef={emailRef}
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                inputRef={passwordRef}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="password-confirm"
                inputRef={passwordConfirmRef}
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
            <Button
              disabled={loading}
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Sign Up
            </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <RDLink to='/login' style={{textDecoration: 'none'}}>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </RDLink>
            </Grid>
          </Grid>
        </form>
        </ThemeProvider>
      </div>
    </Container>
  );
}
