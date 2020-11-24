import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from '@material-ui/icons/Edit';
import Title from './Title';
import { db } from '../firebase';
import { Typography } from '@material-ui/core';
import { EcoRounded } from '@material-ui/icons';

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Orders(props) {
    const classes = useStyles();
    let changed = ['flag'];
    async function onCancel(e) {
        e.stopPropagation();
        await db.collection('shipments').doc(e.target.value).delete();
    }
    return (
        <React.Fragment>
            <Title>Recent Shipments</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Delivery Number</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Ship To</TableCell>
                        <TableCell>Ship from</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Cancel</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.shipment.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell >{row.date}</TableCell>
                            <TableCell>{row.deliveryNumber}</TableCell>
                            <TableCell>{row.senderFirst}</TableCell>
                            <TableCell>{row.recipientAddress}</TableCell>
                            <TableCell>{row.senderAddress}</TableCell>
                            <TableCell align="right">{row.status ? <CheckCircleIcon /> : <TimelapseIcon />}</TableCell>
                            <TableCell align="right">{row.status ? " " : <Checkbox onChange={(e) => { onCancel(e) }}
                                color="secondary"
                                value={row.deliveryNumber}
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
}
