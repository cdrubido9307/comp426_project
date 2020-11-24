import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
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

export default function Expenses(props) {
    const classes = useStyles();
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();
    const [today, setToday] = useState(mm + '/' + dd + '/' + yyyy);
    let count_com = 0;
    let count_on = 0;

    function getCounts(com, on) {
        for (let i = 0; i < props.shipment.length; i++) {
            if (props.shipment[i].status) count_com++;
            else count_on++;
        }
    }
    getCounts(count_com, count_on);

    return (
        <React.Fragment>
            <Title>Completed Shipments</Title>
            <Typography component="p" variant="h4">
                {count_com}
            </Typography>
            <Title>On Transit Shipments</Title>
            <Typography component="p" variant="h4">
                {count_on}
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                {today}
            </Typography>
        </React.Fragment>
    );
}
