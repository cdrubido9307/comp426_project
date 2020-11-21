import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import primes from '../../static/primes.js';

import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';

import {
  AppBar,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Toolbar,
  CircularProgress
} from '@material-ui/core';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

import ShipmentForm from './Forms/ShipmentForm';
import ShipmentFormSecond from './Forms/ShipmentFormSecond';
import ReviewShipment from './ReviewShipment/ReviewShipment';

import PlaceOrder from './Forms/PlaceOrder';
import InitialValues from './FormModel/InitialValues';
import ReviewShipmentModel from './FormModel/ReviewShipmentModel';
import ValidationSchema from './FormModel/ValidationSchema';

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

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  toolbar: {
    background: 'none'
  },
  close: {
    color: '#F57C00',
    marginLeft: 'auto',
  }
}));

const steps = ['Sender Information', 'Recipient Information', 'Review Shipment'];
const { formId, formField } = ReviewShipmentModel;

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ShipmentForm formField={formField} />;
    case 1:
      return <ShipmentFormSecond formField={formField} />;
    case 2:
      return <ReviewShipment />;
    default:
      throw new Error('Unknown step');
  }
}

export default function CreateShipment() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [values, setValues] = useState({});
  const history = useHistory();
  const validationSchema = ValidationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;


  // Random generator begins=================================================
  function shuffle(array) {
    let i = array.length,
      j = 0,
      temp;

    while (i--) {

      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function encryptedRandom(randArray) {
    const rand = getRandom(9591);
    let number = primes[rand] * randArray[getRandom(5)] * primes[rand];

    return "DT" + number;
  }

  let ranNums = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  // Random generator ends=================================================

  function handleOnClose() {
    history.push("/user-dashboard");
  }

  function makeMeAPromise(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const handleSubmitForm = async function(values, actions) {
    await makeMeAPromise(1000);

    const shipmentNum = encryptedRandom(ranNums);
    values.deliveryNumber = shipmentNum;
    values.status = false;
    console.log(values);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
    return values;
  }

  async function handleSubmit(values, actions) {
    if (isLastStep) {
      setValues(await handleSubmitForm(values, actions));
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <React.Fragment>
      <CssBaseline />
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
      <ThemeProvider theme={theme}>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Shipment Form
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <PlaceOrder values = {values} />
              ) : (
                  <Formik
                    initialValues={InitialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting }) => (
                      <Form id={formId}>
                        {getStepContent(activeStep)}

                        <div className={classes.buttons}>
                          {activeStep !== 0 && (
                            <Button onClick={handleBack} className={classes.button}>
                              Back
                            </Button>
                          )}
                          <div className={classes.wrapper}>
                            <Button
                              disabled={isSubmitting}
                              type="submit"
                              variant="contained"
                              color="primary"
                              className={classes.button}
                            >
                              {isLastStep ? 'Place order' : 'Next'}
                            </Button>
                            {isSubmitting && (
                              <CircularProgress
                                size={24}
                                className={classes.buttonProgress}
                              />
                            )}
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                )}
            </React.Fragment>
          </Paper>
        </main>
      </ThemeProvider>
    </React.Fragment>
  );
}