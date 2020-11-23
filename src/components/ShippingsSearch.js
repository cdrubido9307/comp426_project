import React, { useState } from 'react';
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
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import { useRef } from 'react';

const filter = createFilterOptions();

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  search: {
    flexGrow: 1,
    alignItems: 'right',

  },
  clearIndicator: {
    "& span": {
      "& svg": {
        "& path": {
          d: "path('M10.219,1.688c-4.471,0-8.094,3.623-8.094,8.094s3.623,8.094,8.094,8.094s8.094-3.623,8.094-8.094S14.689,1.688,10.219,1.688 M10.219,17.022c-3.994,0-7.242-3.247-7.242-7.241c0-3.994,3.248-7.242,7.242-7.242c3.994,0,7.241,3.248,7.241,7.242C17.46,13.775,14.213,17.022,10.219,17.022 M15.099,7.03c-0.167-0.167-0.438-0.167-0.604,0.002L9.062,12.48l-2.269-2.277c-0.166-0.167-0.437-0.167-0.603,0c-0.166,0.166-0.168,0.437-0.002,0.603l2.573,2.578c0.079,0.08,0.188,0.125,0.3,0.125s0.222-0.045,0.303-0.125l5.736-5.751C15.268,7.466,15.265,7.196,15.099,7.03')" // your svg icon path here
        }
      }
    }
  },
  popupIndicator: {
    "& span": {
      "& svg": {
        "& path": {
          d: "path('M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z')"
        }
      }
    }
  }
}));

export default function Orders(props) {
  const searchRef = useRef();
  const allShipments = [];
  props.shipment.filter((val) => val.status).map((val) => { allShipments.push({ title: val.deliveryNumber, date: val.date, from: val.senderAddress + ", " + val.senderCity + ", " + val.senderState + " " + val.senderZip, to: val.recipientAddress + ", " + val.recipientCity + ", " + val.recipientState + " " + val.recipientZip }) });
  const classes = useStyles();
  const [value, setValue] = React.useState(null);
  const [newVal, setNewVal] = useState({});
  const [oldVal, setOldVal] = useState({});
  const [loading, setLoading] = useState(false);
  let changed = ['flag'];
  async function onCancel(e) {
    e.stopPropagation();
    await db.collection('shipments').doc(e.target.value).delete();
  }
  return (
    <React.Fragment>
      <Grid container className={classes.root} spacing={2}>
        <Autocomplete
        classes={{
          clearIndicatorDirty: classes.clearIndicator,
          popupIndicator: classes.popupIndicator
        }}
          value="Select Delivery"
          onChange={(event, newValue) => {
            setOldVal({title: newVal})
            if (typeof newValue === 'string') {
              setValue({
                title: newValue,
              });
              console.log(value);
            } else if (newValue && newValue.inputValue) {
              // Create a new value from the user input
              setValue({
                title: newValue.inputValue,
              });
            } else {
              setValue(newValue);
            }
            if (value == null) {
              setLoading(false);
            }
            else {
              setNewVal(value);
              console.log(value);
              setLoading(true);
            }
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);

            // Suggest the creation of a new value
            if (params.inputValue !== '') {
              filtered.push({
                inputValue: params.inputValue,
                title: `Add "${params.inputValue}"`,
              });
            }
            return filtered;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys

          id="free-solo-with-text-demo"
          options={allShipments}
          getOptionLabel={(option) => {
            // Value selected with enter, right from the input
            if (typeof option === 'string') {
              return option;
            }
            // Add "xxx" option created dynamically
            if (option.inputValue) {
              return option.inputValue;
            }
            // Regular option
            return option.title;
          }}
          renderOption={(option) => option.title}
          style={{ width: 300 }}
          freeSolo
          renderInput={(params) => (
            <div>

              <TextField {...params} label="Search by delivery number" variant="outlined" />
              <br />


            </div>

          )}
        />
        <br />
      </Grid>
      <br/>
      <br/>
      {loading && <div>
        <Title>Found shipment</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Delivery Number</TableCell>
              <TableCell>Delivered On</TableCell>
              <TableCell>Pickup Address</TableCell>
              <TableCell>Drop-off Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              <TableRow>
                <TableCell>{newVal.title}</TableCell>
                <TableCell >{newVal.date}</TableCell>
                <TableCell >{newVal.from}</TableCell>
                <TableCell >{newVal.to}</TableCell>
              </TableRow>
            }
          </TableBody>
        </Table>
      </div>}
    </React.Fragment>

  );

}
