import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  let date = new Date();
  let dd = String(date.getDate()).padStart(2, '0');
  let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = date.getFullYear();
  const [today, setToday] = useState(mm + '/' + dd + '/' + yyyy);
  return (
    <React.Fragment>
      <Title>Year to Day Expenses</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      {today}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Shipping Tickets
        </Link>
      </div>
    </React.Fragment>
  );
}