import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ExploreSharpIcon from '@material-ui/icons/ExploreSharp';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

import { Link } from 'react-router-dom';


export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <Link to='/create-shipement' style={{ color: '#707070', textDecoration: 'none' }}>
                    <LocalShippingIcon />
                </Link>
            </ListItemIcon>
            <Link to='/create-shipement' style={{ color: '#212121', textDecoration: 'none' }}>
                <ListItemText primary="Create Shipment" />
            </Link>
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <ExploreSharpIcon />
            </ListItemIcon>
            <ListItemText primary="Track Shipments" />
        </ListItem>

        <ListItem button>
            <ListItemIcon>
                <ContactSupportIcon />
            </ListItemIcon>
            <ListItemText primary="Contact Us" />
        </ListItem>
    </div>
);